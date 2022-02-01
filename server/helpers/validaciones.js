const validarADN = (array) => {

    try {

        if(!Array.isArray(array)) return { status: false, mensaje: 'La propiedad dna debe ser un arreglo de strings.' }

        if(array.length === 0) return { status: false, mensaje: 'Debes mandar por lo menos una posición en el arreglo.' }

        let textoDNA = array.join('');

        if(array.length !== (textoDNA.length / array.length)) return { status: false, mensaje: 'El arreglo de ADN no tiene un formato válido.' }

        if(!textoDNA.match(/^[ACGT]+$/)) return { status: false, mensaje: 'Solo se permiten las letras A, C, G, T en cada string.' }

        return { status: true }

    } catch (error) {

        return { status: false, mensaje: 'Ocurrió un error al intentar validar el arreglo.' }

    }

}

module.exports = {
    validarADN
}