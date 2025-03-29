const express = require('express');
const hostRouter = express.Router();
const homeControllers = require('../controllers/homes');

hostRouter.get('/add-home',homeControllers.getAddHome);

const registeredHomes = [];

hostRouter.post('/add-home', (req, res) => {
    console.log("Home Registration successfull for: ",req.body, req.body.housename);
    registeredHomes.push({housename: req.body.housename});
    res.render('homeAdded', {pageTitle: 'Home Added'});
});

module.exports = hostRouter;
module.exports.registeredHomes = registeredHomes;