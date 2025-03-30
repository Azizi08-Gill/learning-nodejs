const express = require('express');
const hostRouter = express.Router();
const homeControllers = require('../controllers/homes');

hostRouter.get('/add-home',homeControllers.getAddHome);

const registeredHomes = [];

hostRouter.post('/add-home', homeControllers.postAddHome);

module.exports = hostRouter;
module.exports.registeredHomes = registeredHomes;