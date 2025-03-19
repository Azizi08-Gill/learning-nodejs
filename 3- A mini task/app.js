import http from 'http';

const server = http.createServer((req, res)=>{
   console.log(req.url, req.method, req.headers, req.body);
   res.setHeader('Content-Type', 'text/html');
   if(req.url === '/'){
    res.write('<html>');
    res.write('<head><title>ShopSphere E-Commerce Store</title></head>');
    res.write('<body>');
    res.write('<nav');
    res.write('<ul>');
    res.write('<li><a href="/">Home</a></li>');
    res.write('<li><a href="/products">Products</a></li>');
    res.write('<li><a href="/cart">Cart</a></li>');
    res.write('<li><a href="/contact">Contact</a></li>');
    res.write('</ul>');
    res.write('</nav');
    res.write('</body');
    res.write('</html>');
    return res.end();
   } else if(req.url === '/products'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title><h1>Products</h1></title></head>');
    res.write('<body>');
    res.write('<h2>Product List</h2>');
    res.write('<ul>');
    res.write('<li>Product 1</li>');
    res.write('<li>Product 2</li>');
    res.write('<li>Product 3</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
   } else if(req.url === '/cart'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title><h1>Cart</h1></title></head>');
    res.write('<body>');
    res.write('<h2>Shopping Cart</h2>');
    res.write('<ul>');
    res.write('<li>Item 1</li>');
    res.write('<li>Item 2</li>');
    res.write('<li>Item 3</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
   } else if(req.url.toLowerCase() === '/contact'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title><h1>Contact Us</h1></title></head>');
    res.write('<body>');
    res.write('<h2>Contact Us</h2>');
    res.write('<ul>');
    return res.end();
   }
})

const PORT = 5001;
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})