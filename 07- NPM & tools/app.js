const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
});

const PORT = 9002;
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})

// nodemon package is only required for development and production
// no need to run on browser
// so these kind of packages are installed as dev dependencies using -save-dev commands
// -g is used to install a package globally
// -force is used to force install a package
// -save-exact is used to save the exact version of the package