const admin = require('../config/firebase-config');
const {getDetailedUser} = require('../controllers/client/controllerGetDetailedUser')

class UserMiddleware {
	async decodeToken(req, res, next) {
		if (req.headers.authorization && req.headers.user) {
			const token = req.headers.authorization.split(' ')[1];
			const username = req.headers.user
			try {
				const decodeValue = await admin.auth().verifyIdToken(token);
				const user = await getDetailedUser(username)
				if (decodeValue) {
					if (user && user.dataValues.role === 'User') {
						return next();
					}
				}
				return res.json({ message: 'No autorizado' });
			} catch (e) {
				return res.json({ message: 'Internal Error' });
			}
		}
		else{
			return res.json({ message: 'No autorizado' });
		}
	}
}
module.exports = new UserMiddleware();