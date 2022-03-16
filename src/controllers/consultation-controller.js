'use strict'

	
const moment = require("moment");
const repository = require('../repositories/consultation-repository');

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            type: req.body.type,
            startAt: moment(req.body.startAt).format("DD/MM/YYYY hh:mm"),
            active: false,
            patient: req.body.patient
        });
        res.status(201).send({
            message: 'Consulta cadastrada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: e
        });
    }

}

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.body);
        res.status(201).send({
            message: 'Consulta cadastrada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: e
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

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Consulta removida com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}