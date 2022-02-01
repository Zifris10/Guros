const path = require('path');

exports.swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Proyecto DNA',
            version: '1.0.0',
            description: 'End Points para el proyecto de DNA'
        }
    },
    apis: [`${path.join(__dirname, '../routes/*.js')}`]
}