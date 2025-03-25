const http = require('http');
const requestHandler = require('./user');


const server = http.createServer(requestHandler);
const PORT = 3007;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// open localhost:3007 on any browser
// then see the terminal output
