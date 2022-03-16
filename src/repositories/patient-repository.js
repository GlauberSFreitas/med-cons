'use strict'

const mongoose = require('mongoose');
const Patient = mongoose.model('Patient');

exports.get = async() => {
    const res = await Patient.find({},);
    return res;    
}

exports.create = async(data) => {
    var patient = new Patient(data);
   return await patient.save();
}