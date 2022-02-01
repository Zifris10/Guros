const { swaggerSpec } = require('./config/swagger');

const swaggerUi = require('swagger-ui-express');

const swaggerJSDoc = require('swagger-jsdoc');

const express = require('express');

const path = require('path');

const app = express();

app.set('views', '../views');

app.set('view engine', 'pug');

app.use(express.json());

app.use(require('./routes/routes'));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/api-documentation', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerSpec)));

app.listen(process.env.PORT, () => {
    console.log('Puerto escuchando en', process.env.PORT);
});