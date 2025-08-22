const UserRoutes = require('../controllers/UserControler');

const express = require('express');

const route = express.Router();

route.post('/newuser',UserRoutes.newUser);


module.exports = route;