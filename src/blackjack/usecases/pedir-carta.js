/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck Ejemplo:['8D', 'AH', '3C', '3H', '3D', etc'] 
 * @returns {string} retorna la carta del deck
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0)
        throw new Error('No hay cartas en el deck');

    const carta = deck.pop();
    return carta;
}