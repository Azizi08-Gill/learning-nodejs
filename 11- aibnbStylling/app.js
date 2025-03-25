const express = require('express');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtils');
const contactRouter = require('./routes/contactRouter');

//core module
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));
app.use(userRouter);
app.use("/host",hostRouter);
app.use(contactRouter);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});