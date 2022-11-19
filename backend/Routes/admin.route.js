const express = require('express');
const route = express.Router();

const {
    createProduct,
    getProducts,
    getItemProduct,
    updateProduct,
    deleteProduct
} = require('../Controllers/product.controller');

const AdminController = require('../Controllers/admin.controller.js');
const jwtMiddleware = require('../middleware/jwt.middleware.js');
// public
// router.post('/register', AdminController.register);
// router.post('/login', AdminController.login);

route.post('/login', AdminController.login);
route.post('/register', AdminController.register);
route.post('/logout', jwtMiddleware.verifyToken, AdminController.logout);

route.get('/products', jwtMiddleware.verifyToken, getProducts);
route.get('/products/:id', getItemProduct);
route.post('/created-product', createProduct);

route.patch('/product/:id', updateProduct);
route.delete('/product/:id', deleteProduct);

route.get('/', (req, res) => { res.send(' Admin route') });


module.exports = route;