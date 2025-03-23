import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(express.urlencoded());

app.use((req, res, next)=>{
    console.log(req.url, req.method);
    next();
})

app.get('/', (req, res, next)=>{
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href="/add-home"> Add Home </a>
        `);
    next();
});

app.get('/add-home', (req, res, next)=>{
    res.send(`
        <h1>Please Add Your Home Here</h1>
        <form method="POST" action="/add-home">
        <input type="text" name="housename" placeholder="Enter your house name">
        <input type="submit" value="Submit">
        `);
    next();
});

app.post('/add-home', (req, res, next)=>{
    console.log(req.body);
    res.send(`
        <h1>Thank you for adding home</h1>
        <a href="/add-home"> Go To Home </a>
        `);
    next();
});




const PORT = 9000;
app.listen(PORT, (req, res, next)=>{
    console.log(`Server running at http://localhost:${PORT}`);
})