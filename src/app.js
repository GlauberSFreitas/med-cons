'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//conecta ao banco
mongoose.connect('mongodb+srv://glauber:glauber@cluster1.r5xl8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//carraga models
const Consultation = require('./models/consultation');
const Patient = require('./models/patient');

//carrega rotas
const indexRoute = require("./routes/index");
const consultationRoute = require("./routes/consultation-route");
const patientRoute = require("./routes/patient-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use('/',indexRoute);
app.use('/consultations',consultationRoute);
app.use('/patients',patientRoute);

module.exports = app;