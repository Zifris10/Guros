const { swaggerSpec } = require('./config/swagger');

const swaggerUi = require('swagger-ui-express');

const swaggerJSDoc = require('swagger-jsdoc');

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(require('./routes/routes'));

app.use('/api-documentation', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerSpec)));

app.listen(process.env.PORT, () => {
    console.log('Puerto escuchando en', process.env.PORT);
});