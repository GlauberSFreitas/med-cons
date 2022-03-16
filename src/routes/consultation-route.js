'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/consultation-controller');


router.post('/', controller.post);
router.get('/', controller.get);
router.put('/',controller.put);
router.delete('/:id',controller.delete);


module.exports = router;
