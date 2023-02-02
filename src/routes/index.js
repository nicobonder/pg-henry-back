const { Router } = require('express');
const routeGetAllProducts = require('./routeGetAllProducts');

const router = Router();

router.use('/products', routeGetAllProducts);

module.exports = router;
