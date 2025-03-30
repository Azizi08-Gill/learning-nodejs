
const registeredHomes = [];

exports.getAddHome = (req, res) => {
    res.render('addHome', {pageTitle: 'Add Home'});
};

exports.postAddHome = (req, res) => {
    console.log("Home Registration successfull for: ",req.body, req.body.housename);
    registeredHomes.push({housename: req.body.housename});
    res.render('homeAdded', {pageTitle: 'Home Added'});
};

exports.getHomes = (req, res) => {
    console.log(registeredHomes);
    res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb'});
};