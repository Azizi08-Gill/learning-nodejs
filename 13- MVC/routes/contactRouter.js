const express = require('express');
const contactRouter = express.Router();
const path = require('path');
//const rootDir = require('../utils/pathUtils')
contactRouter.get('/contact-us', (req, res) => {
    res.render('contact', {pageTitle: 'Contact Us'});
});
contactRouter.post('/contact-us', (req, res) => {
    console.log(req.body);
    res.render('contactSuccess', {pageTitle: 'Contact Successful'});
});
module.exports = contactRouter;