const { validarADN } = require('../server/helpers/validaciones');

const hasMutation = require('dna-mutation');

const sinMutacion = ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'];

const conMutacion = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];

describe('ADN', () => {

    test('Debe retornar error porque el arreglo de ADN va undefined', () => {

        let validar = validarADN();

        expect(validar.status).toBe(false);

    });

    test('Debe retornar error porque el arreglo de ADN va null', () => {

        let validar = validarADN(null);

        expect(validar.status).toBe(false);

    });

    test('Debe retornar error porque el arreglo de ADN va como un string', () => {

        let validar = validarADN('');

        expect(validar.status).toBe(false);

    });

    test('Debe retornar error porque el arreglo de ADN va como un número', () => {

        let validar = validarADN(20);

        expect(validar.status).toBe(false);

    });

    test('Debe retornar error porque el arreglo de ADN va como un boleano', () => {

        let validar = validarADN(true);

        expect(validar.status).toBe(false);

    });

    test('Debe retornar error porque el arreglo de ADN va como un objeto', () => {

        let validar = validarADN({ dna: 'Ok' });

        expect(validar.status).toBe(false);

    });

    test('Debe retornar error porque el arreglo de ADN va como arreglo vacío', () => {

        let validar = validarADN([]);

        expect(validar.status).toBe(false);

    });

    test('Debe retornar error porque el arreglo de ADN va como arreglo de números', () => {

        let validar = validarADN([12312, 123123, 245345]);

        expect(validar.status).toBe(false);

    });

    test('Debe retornar error porque el arreglo de ADN va como arreglo de strings sin el formato correcto', () => {

        let validar = validarADN(['12312', '123123', '245345']);

        expect(validar.status).toBe(false);

    });

    test('Debe retornar error porque el arreglo de ADN no tiene mutación', () => {

        let validar = hasMutation(sinMutacion);

        expect(validar).toBe(false);

    });

    test('Operación correcta el arreglo de ADN si tiene mutación', () => {

        let validar = hasMutation(conMutacion);

        expect(validar).toBe(true);

    });

});