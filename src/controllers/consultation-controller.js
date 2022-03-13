'use strict'


const repository = require('../repositories/consultation-repository');

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            type: req.body.type,
            startAt: req.body.startAt,
            active: false,
            patient: req.body.patient
        });
        res.status(201).send({
            message: 'Consulta cadastrada com sucesso!'
        });
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