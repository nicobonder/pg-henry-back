const { Router } = require('express');
const { getAllProducts } = require('../../controllers/client/controllerGetAllProducts');
const { getProductsFiltered } = require('../../controllers/client/controllerGetProductsFiltered');

const router = Router();

router.get('/', async(req, res) => {
    const {name, days, category} = req.query;

    console.log('antes de try');
    try {
        let products= [];
        if (name || days || category) {
            products = await getProductsFiltered(name, days, category);
        } else {
            products = await getAllProducts();
        }

        if (products.length) return res.status(200).json(products);
        console.log('antes de 404');
        res.status(404).json({error: `No existen productos registrados`}); 
    }catch(e) {
        console.log('entra en catch');
        res.status(400).json({error: e.message});
    }
});

module.exports = router;