import { crearCartaHtml, pedirCarta, valorCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que necesita la pc para ganar 
 * @param {HTMLElement} puntosHTML elemento para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
// turno de la computadora
 export const turnoComputadora = (puntosMinimos,puntosHTML, divCartasComputadora,deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos minimos es necesario');
    if (!puntosHTML) throw new Error('Puntos HTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora    = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
