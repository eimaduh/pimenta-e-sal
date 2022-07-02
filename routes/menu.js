const express = require('express');
const menuRouter = express.Router();
const menuController = require('../controllers/menuControler')

menuRouter.get('/', menuController.getHomePage);
menuRouter.get('/detalhe/:id', menuController.getDetails )


module.exports = menuRouter