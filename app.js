const PORT = 3000;
const bodyParser = require('body-parser');
const companyRouter = require(`./routes/companies.routes`);
const commentsRouter = require('./routes/comments.routes');
const userRouter = require('./routes/user.routes')

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const logger = require('morgan');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


require('./configs/db.config.js');
require('./configs/hbs.config.js');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use("/companies",companyRouter);
app.use('/comments', commentsRouter);
app.use('/user', userRouter);


app.listen(PORT, console.info('All right!'));
