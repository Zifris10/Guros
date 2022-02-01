const validarADN = (array) => {

    if(!Array.isArray(array)) return { status: false, mensaje: 'El arreglo de adn debe ser un arreglo de strings.' }

    if(array.length === 0) return { status: false, mensaje: 'Debes mandar por lo menos una posición en el arreglo.' }

    let textoDNA = array.join('');

    if(array.length !== (textoDNA.length / array.length)) return { status: false, mensaje: 'El arreglo de ADN no tiene un formato válido.' }

    if(!textoDNA.match(/^[ACGT]+$/)) return { status: false, mensaje: 'Solo se permiten las letras A, C, G, T en cada string.' }

    return { status: true }

}

module.exports = {
    validarADN
}