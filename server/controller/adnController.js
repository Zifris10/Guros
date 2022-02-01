const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { validarADN } = require('../helpers/validaciones');

const hasMutation = require('dna-mutation');

const verifyMutation = async (req, res) => {

    try {

        let { dna } = req.body;

        let validar = validarADN(dna);

        if(validar.status === false) return res.status(400).send(validar);

        let mutation = hasMutation(dna);

        let respuesta = {
            code: 403,
            data: {
                status: false
            }
        }

        let data = await prisma.dna.create({
            data: {
                dna,
                hasMutation: mutation
            }
        });

        if(data) {

            if(mutation) {

                respuesta.data.mensaje = 'El ADN si tiene mutación';

                respuesta.code = 200;

                respuesta.data.status = true;

            } else {

                respuesta.data.mensaje = 'El ADN no tiene mutación';

            }

        } else {

            respuesta.data.mensaje = 'Ocurrió un error al intentar agregar el histórico.';

        }

        res.status(respuesta.code).send(respuesta.data);

    } catch (error) {

        res.status(500).send({ status: false, mensaje: 'Ocurrió un error interno en el servidor, por favor intenta de nuevo.' });

    }

}

const getStats = async (req, res) => {

    try {

        let countWith = {
            where: {
				hasMutation: true
			}
        }

        let countWithOut = {
            where: {
				hasMutation: false
			}
        }

        let [ withMutation, withOutMutation ] = await Promise.all([
			prisma.dna.count(countWith),
			prisma.dna.count(countWithOut)
		]);

        let ratio = withMutation / withOutMutation;

        let respuesta = {
            status: true,
            count_mutations: withMutation,
            count_no_mutation: withOutMutation,
            ratio: isNaN(ratio) ? 0 : Number(ratio.toFixed(2))
        }

        res.status(200).send(respuesta);

    } catch (error) {

        res.status(500).send({ error: 'Ocurrió un error interno en el servidor, por favor intenta de nuevo.' });

    }

}

module.exports = {
    verifyMutation,
    getStats
}