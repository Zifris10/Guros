const { convertirArchivoPug } = require('../helpers/pug');

const renderBienvenida = async (req, res) => {

    try {

        let respuesta = {
            code: 403,
            html: ''
        }

        let htmlPug = convertirArchivoPug('index.pug');

        if(htmlPug.status) {

            respuesta.code = 200;

            respuesta.html = htmlPug.html;

        }

        res.status(respuesta.code).send(respuesta.html);

    } catch (error) {

        res.status(500).send({ status: false, mensaje: 'Ocurrió un error interno en el servidor, por favor intenta de nuevo.' });

    }

}

module.exports = {
    renderBienvenida
}