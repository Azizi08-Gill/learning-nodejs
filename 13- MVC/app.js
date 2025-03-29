const express = require('express');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtils'); // no need for rootDir anymore
const contactRouter = require('./routes/contactRouter');

//core module
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));
app.use(userRouter);
app.use("/host",hostRouter);
app.use(contactRouter);

app.use((req, res, next)=>{
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});