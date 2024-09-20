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

  //creo un ciclo for para iterar las posibles posiciones ganadoras y comprobar si están en el arrayCeldas.
  //cada vez que itero compruebo si las posiciones ganadoras en mi arrayCeldas tienen la misma string (llevan o la X o el O). Si son iguales, hay un ganador :)

  for (let i = 0; i < winCombinations.length; i++) {
    const pos1 = winCombinations[i][0];
    const pos2 = winCombinations[i][1];
    const pos3 = winCombinations[i][2];

    if (arrayCeldas[pos1] != '') {
      if (
        arrayCeldas[pos1] === arrayCeldas[pos2] &&
        arrayCeldas[pos1] === arrayCeldas[pos3]
      ) {
        const player = arrayCeldas[pos1];
        console.log(`ha vinto il player ${player}`);
      }
    }
  }
};
