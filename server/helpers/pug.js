const { renderFile } = require('pug');

const path = require('path');

const convertirArchivoPug = (rutaArchivo, datos = {}) => {
	
	try {

		let html = renderFile(path.resolve(__dirname, `../../views/${rutaArchivo}`), datos);

		return { status: true, html }

	} catch (error) {

        return { status: false, error: 'No se ha podido renderizar el archivo con los datos.' }

    }

}

module.exports = {
	convertirArchivoPug
}