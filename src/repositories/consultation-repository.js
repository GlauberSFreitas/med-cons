'use strict'

const mongoose = require('mongoose');
const Consultation = mongoose.model('Consultation');

exports.get = async() => {
    const res = await Consultation.find({
        active:'false'},'_id type startAt');
    return res;    
}

exports.create = async(data) => {
    var consultation = new Consultation(data);
    await consultation.save();
}