const express = require('express');
const userRouter = express.Router();
//Local Module
// No need for root directory anymore
//const rootDir = require('../utils/pathUtils');

// core module
const homeControllers = require('../controllers/homes');

userRouter.get('/', homeControllers.getHomes);

module.exports = userRouter;