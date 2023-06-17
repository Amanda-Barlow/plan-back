require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const planRoutes = require('./routes/planRoutes.js');
const methodOverride = require('method-override');

//MIDDLEWARE
app.use(cors()); 
app.use(express.urlencoded({extended: true}))
app.use(express.json()); 
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//ROUTES
app.use('/', routes)
app.use('/plan', planRoutes);

//catch all 404 route
app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})})

//LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));


