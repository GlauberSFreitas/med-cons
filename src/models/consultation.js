'use strict'

const  mongoose = require("mongoose");
const Patient = require("./patient");
const Schema = mongoose.Schema;

const schema = new Schema({
    type: {
        type: String,
        required: [true, 'type é um campo obrigatório'],
    },
    active: {
        type: Boolean,
        required: [false, 'active é campo obrigatório'],
        default: false
    },
    startAt: {
        type: String,
        required: [false, 'startAt é campo obrigatório'],
        unique: [true, 'Não é possivel criar uma consulta neste horario']
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Patient,
    }

});

module.exports = mongoose.model('Consultation', schema);