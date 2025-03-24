import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRouter';
const app = express();
app.use(express.urlencoded());

app.use((req, res, next)=>{
    console.log(req.url, req.method);
    next();
})

app.use(userRouter);


const PORT = 9000;
app.listen(PORT, (req, res, next)=>{
    console.log(`Server running at http://localhost:${PORT}`);
})