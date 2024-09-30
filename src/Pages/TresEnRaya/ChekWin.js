import './PrintWinner.css';
import './PrintDraw.css';

import '../../components/Utils/Anims.css';
import { updateWins } from './TotWins';
import { printWinner } from './PrintWinner';
import { printDraw } from './PrintDraw';

export const checkWinner = (arrayCeldas) => {
  //creo un array con combinaciones ganadoras
  let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let winner = false; //variable para saber si hay un ganador

  //creo un ciclo for para iterar las posibles posiciones ganadoras y comprobar si están en el arrayCeldas.
  //cada vez que itero compruebo si las posiciones ganadoras en mi arrayCeldas tienen la misma string (llevan o la X o el O). Si son iguales, hay un ganador :)
  for (let i = 0; i < winCombinations.length; i++) {
    const pos1 = winCombinations[i][0]; //el primer numero de cada combinacion
    const pos2 = winCombinations[i][1]; //el primer numero de cada combinacion
    const pos3 = winCombinations[i][2]; //el primer numero de cada combinacion

    if (arrayCeldas[pos1] != '') {
      if (
        arrayCeldas[pos1] === arrayCeldas[pos2] &&
        arrayCeldas[pos1] === arrayCeldas[pos3]
      ) {
        const player = arrayCeldas[pos1];
        console.log(`ha ganado el player ${player}`);
        printWinner(player, arrayCeldas);
        updateWins(player);
        winner = true;
      }
    }
  }
  //para saber si hay empate chequeo que winner sea false, y que ninguna celda esté vacía
  if (!winner && arrayCeldas.every((celda) => celda !== '')) {
    console.log('empate');
    printDraw(arrayCeldas); //pinta el empate
  }
};
