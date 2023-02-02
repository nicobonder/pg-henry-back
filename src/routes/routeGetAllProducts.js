const { Router } = require('express');
const { getAllProducts } = require('../controllers/controllerGetAllProducts');

const router = Router();

router.get('/', async(req, res) => {
    try {
        const products = await getAllProducts();
        if (products.length) return res.status(200).json(products);
        res.status(404).json({error: `No existen productos registrados`}); 
    }catch(e) {
        res.status(400).json({error: e.message});
    }
});

module.exports = router;