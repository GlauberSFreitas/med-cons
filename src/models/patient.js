'use strict'

const  mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'name é um campo obrigatório'],
    },
    cpf: {
        type: String,
        required: [true, 'cpf é um campo obrigatório'],
    },
    born: {
        type: Date,
        required: [true, 'born é um campo obrigatório'],
    },
    height: {
        type: Number,
        required: [true, 'height é um campo obrigatório'],
    },
    weight: {
        type: Number,
        required: [true, 'weight é um campo obrigatório'],
    },
    pressure: {
        type: String,
        required: [true, 'pressure é um campo obrigatório'],
    },
    saturation: {
        type: Number,
        required: [true, 'saturation é campo obrigatório'],
        default: false
    }

});

module.exports = mongoose.model('Patient', schema);