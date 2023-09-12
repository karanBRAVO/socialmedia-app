const express = require('express');
const {dbConnect} = require('./config/dbConnect');
const router = require('./router/router');
require('dotenv').config();
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const app = express();
dbConnect();

app.use(express.json());
app.use(fileupload());
app.use(cookieParser());
app.use('/api/v1',router);

app.listen(process.env.PORT , () => {
    console.log('app started succsesfully!!');
});