const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProducts,
    getItemProduct,
    updateProduct,
    deleteProduct
} = require('../Controllers/product.controller');

const AdminController = require('../Controllers/admin.controller.js');

// public
// router.post('/register', AdminController.register);
// router.post('/login', AdminController.login);

router.get('/products', getProducts);
router.get('/products/:id', getItemProduct);
router.post('/created-product', createProduct);

router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

router.get('/', (req, res) => { res.send(' Admin route') });


module.exports = router;