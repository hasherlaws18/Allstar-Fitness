const router = require('express').Router();
const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//turn on routes
app.use(routes);

//turn on connection to db and and server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});