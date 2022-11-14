const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/user.controller');

// public
router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.get('/', (req, res) => {res.send(' user route')});


module.exports = router;