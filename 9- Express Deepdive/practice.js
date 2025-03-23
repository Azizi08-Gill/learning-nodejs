import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use((req, res, next)=>{
    console.log("In first middleware...", req.url, req.method);
    next();
})

app.use((req, res, next)=>{
    console.log("In second middleware...", req.url, req.method);
    next();
})

// app.use((req, res, next)=>
//     console.log("Inside third middleware...");
//     res.send("<h1>Response from third middleware</h1>");
// })

app.get('/',(req, res, next)=>{
   res.send("<h1>Welcome to Express JS</h1>");
})

app.get('/contact-us',(req, res, next)=>{
    res.send(`
        <h1>Please Give Your Details Here</h1>
        <form method="POST" action="/submit-details">
        <input type="text" name="name" placeholder="Enter your name">
        <input type="email" name="email" placeholder="Enter your email">
        <input type="submit" value="Submit">
        `);
 })

 app.get('/submit-details',(req, res, next)=>{
    res.send(`
        <h1>Please Give Your Details Here</h1>
        <form method="POST" action="/submit-details">
        <input type="text" name="name" placeholder="Enter your name">
        <input type="email" name="email" placeholder="Enter your email">
        <input type="submit" value="Submit">
        `);
 });

 app.use(bodyParser.urlencoded());

    app.post("/submit-details", (req, res, next) => {
      console.log(req.body);
      res.send("<h1>Thank you for submitting your details</h1>");
    });
const PORT = 9000;
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})