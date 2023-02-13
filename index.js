const server = require('./src/app.js');
const { sequelize } = require('./src/db.js');
const PORT = process.env.PORT || 3000;


sequelize.authenticate().then(() => {
  console.log('Connected to the database');
  server.listen(PORT, () => {
    console.log('Server listening on port ', PORT);
  });
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});

//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { setAllDb } = require('./src/controllers/client/controlletSetAllDb');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  setAllDb();
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}); */
