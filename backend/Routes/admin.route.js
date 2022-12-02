const express = require('express');
const route = express.Router();

const {
    createProduct,
    getProducts,
    getItemProduct,
    updateProduct,
    deleteProduct
} = require('../Controllers/product.controller');

const {
    getAllUser,
    getUserProfile,
    updateUser,
    deleteUser
} = require("../controllers/user.profile.controller.js");

const AdminController = require('../Controllers/admin.controller.js');
const jwtMiddleware = require('../middleware/jwt.middleware.js');
// const UserProfileController = require('../controllers/user.profile.controller.js');
// public
// router.post('/register', AdminController.register);
// router.post('/login', AdminController.login);

route.post('/login', AdminController.login);
route.post('/register', AdminController.register);
route.post('/logout', jwtMiddleware.verifyToken, AdminController.logout);

// Product Router
route.get('/products',  getProducts);
route.get('/products/:id', getItemProduct);
route.post('/created-product', createProduct);

route.patch('/product/:id', updateProduct);
route.delete('/product/:id', deleteProduct);

// User route
route.get('/user-list', getAllUser);
route.get('/user-profile/:id', getUserProfile);
route.patch('/user-profile-update/:id', updateUser);
route.delete('/user-profile-delete/:id', deleteUser);

route.get('/', (req, res) => { res.send(' Admin route') });


module.exports = route;