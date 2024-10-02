import { reloadTris } from '../../../components/Utils/buttonReload';
import { initTres } from '../TresEnRaya';

export const printWinner = (player, arrayCeldas) => {
  const divGame = document.querySelector('#tres');
  const divWinner = document.createElement('div');
  const pWinner = document.createElement('p');
  const h3winner = document.createElement('h3');
  pWinner.textContent = `Ha ganado el jugador:`;
  h3winner.innerText = `${player}`;
  divWinner.classList.add('winner', 'animWin');

  const buttonReload = reloadTris();
  buttonReload.className = 'reloadTris';

  buttonReload.addEventListener('click', () => {
    //limpio las celdas
    for (let i = 0; i < arrayCeldas.length; i++) {
      arrayCeldas[i] = '';
      initTres();
    }
  });

  divWinner.append(pWinner);
  divWinner.append(h3winner);
  divWinner.append(buttonReload);
  divGame.append(divWinner);
};
