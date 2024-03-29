/**
 * Esta función me permite tomar el valor de una carta
 * @param {Array<string>} carta Ejemplo:['8D'] 
 * @returns {number} retorna valor una carta
 */

export const valorCarta = (carta) => {

    if (!carta || carta.length === 0) 
        throw new Error('carta es Obligatorio como un arreglo de string')

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}