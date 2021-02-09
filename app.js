require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user');
const tenantRouter = require('./routes/tenant');


const app = express();
const port = process.env.PORT || 8000;


app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization, Set-Cookie, set-cookie, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
    credentials: true
}));
app.use(cookieParser());


app.use('/user', userRouter);
app.use('/tenant', tenantRouter);
app.get('*', (req, res, next) => {
    console.log('runnnig')
    res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

mongoose.connect(process.env.MONGODB_URI)
    .then(res => {
        app.listen(port, () => {
            console.log('connected to server');
        });
    })
    .catch(err => {
        console.log(err);
    })

