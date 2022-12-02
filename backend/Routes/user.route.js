const express = require('express');
const route = express.Router();

const UserController = require('../controllers/user.controller.js');
const jwtMiddleware = require('../middleware/jwt.middleware.js');

const {
    getProducts,
    getItemProduct,
} = require('../Controllers/product.controller');
const { Router } = require('express');
// public
route.post('/login', UserController.login);
route.post('/register', UserController.register);
route.post('/logout', jwtMiddleware.verifyToken, UserController.logout);

route.get('/product-list', getProducts);
route.get('/product-item/:id', getItemProduct);

//user profile


route.get('/', (req, res) => {res.send(' user route')});


module.exports = route;