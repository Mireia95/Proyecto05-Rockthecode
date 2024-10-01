import { backPuzzle } from '../../../components/Utils/backButton';
import { printWin } from '../CheckWin/PrintWin';

import './BestTime.css';

export const printBestTime = (arrayTime) => {
  const divGame = document.querySelector('#puzzle');

  const divTimes = document.createElement('div');
  const h2 = document.createElement('h2');

  divTimes.append(h2);

  //creo 3 divs para los 3 mejores tiempos
  for (let i = 0; i < 3; i++) {
    const divPos = document.createElement('div');
    const h3Pos = document.createElement('h3');
    h3Pos.innerText = `${i + 1} `;

    const h4Time = document.createElement('h4');
    h4Time.innerText = `${arrayTime[i]}`;

    divPos.append(h3Pos);
    divPos.append(h4Time);
    divTimes.append(divPos);
  }

  //reload juego
  const backButton = backPuzzle();

  backButton.addEventListener('click', () => {
    printWin();
    divTimes.remove();
  });

  h2.innerText = 'BEST TIMES';

  divTimes.className = 'highScore';

  divTimes.append(backButton);

  divGame.append(divTimes);
};
