'use strict'

const mongoose = require('mongoose');
const Consultation = mongoose.model('Consultation');

exports.get = async() => {
    const res = await Consultation.find({
        active:'false'});
    return res;    
}

exports.create = async(data) => {
    var consultation = new  Consultation(data);
    await consultation.save();
}

exports.update = async(data) => {
    await Consultation
        .findByIdAndUpdate(data._id, {
            $set: {
                active: data.active,
                patient: data.patient
            }
        });
}

exports.delete = async(id) => {
    await Consultation
        .findOneAndRemove(id);
}