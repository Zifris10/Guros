/**
 * @openapi
 * tags:
 *   name: DNA
 *   description: Operaciones sobre DNA
 */

const express = require('express');

const app = express();

const controller = require('../controller/adnController');

/**
 * @openapi
 * /mutation:
 *   post:
 *     description: Retorna un json con la información de los registros de mutaciones
 *     tags: [DNA]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *           properties:
 *             dna:
 *               type: object
 *           example:
 *             dna: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
 *     responses:
 *       200:
 *         description: Operación completada
 *       403:
 *         description: Operación incorrecta
 */

app.post('/mutation', controller.verifyMutation);

/**
 * @openapi
 * /stats:
 *   get:
 *     description: Retorna un json con la información de los registros de mutaciones
 *     tags: [DNA]
 *     responses:
 *       200:
 *         description: Operación completada
 *       403:
 *         description: Operación incorrecta
 */

app.get('/stats', controller.getStats);

module.exports = app;