import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req);
    process.exit();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// open localhost:3000 on any browser
// then see the terminal output
