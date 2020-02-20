require('dotenv').config(); // get variables from the .env file
// let PORT = process.env.PORT; // Option A define PORT here

// express stuff
const express = require('express'); // importing express
const app = express(); // invoking/creating the express application

// controller imports
const pies = require('./controllers/piecontroller'); // importing the pie controller into the variable pies
const user = require('./controllers/usercontroller');

// db import & sync
const sequelize = require('./db');
sequelize.sync(); // tip: pass in {force: true} for resetting tables
app.use(express.json());

// middleware
app.use(require('./middleware/headers'));

// routes
// app.get('/pies', (req, res) => res.send('I love pie'));
app.use('/pies', pies); // when get to the endpoint '/pies', activate the pies controller
app.use('/auth', user);


// app.listen(3000, () => console.log('Pie app is listening on 3000'));
app.listen(process.env.PORT, () => console.log(`Pie app is listening on ${process.env.PORT}`)); // use the .env variable

//Option A
// app.listen(PORT, () => console.log(`Pie app is listening on ${PORT}`)); // use the .env variable


// app.use(express.static(__dirname + '/public'))
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index'));








