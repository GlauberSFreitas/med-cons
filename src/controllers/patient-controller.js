'use strict'

const repository = require('../repositories/patient-repository');

exports.post = async (req, res, next) => {
    try {
        console.log(req);
        var data = await repository.create({
            name: req.body.name,
            cpf: req.body.cpf,
            born: req.body.born,
            height: req.body.height,
            weight: req.body.weight,
            pressure: req.body.pressure,
            saturation: req.body.saturation
        });
        res.status(201).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

}

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}