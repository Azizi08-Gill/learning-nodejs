const express = require('express');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

//core module
const path = require('path');

const app = express();

app.use((req, _, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});