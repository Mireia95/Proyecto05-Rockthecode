import { reloadPuzzle } from '../../../components/Utils/buttonReload';

import { initPuzzle } from '../Puzzle';
import { saveTime } from '../Timer/SaveTime';
import { printBestTime } from '../Timer/BestTime';
import './Win.css';

export const printWin = () => {
  const divGame = document.querySelector('#puzzle');
  const divWin = document.createElement('div');
  divWin.className = 'win';

  const h3Win = document.createElement('h3');
  h3Win.innerText = 'YOU WIN!';

  const divButt = document.createElement('div');
  const buttonReload = reloadPuzzle();

  const bestTimeButt = document.createElement('button');
  bestTimeButt.innerHTML =
    "<img alt='bestTime' src='./assets/CatchingBanana/trofeo.png'/> ";

  let arrayTime = saveTime(); //actualizo los 3 primeros times mejores

  //eventos de los botones
  buttonReload.addEventListener('click', () => {
    initPuzzle();
  });

  bestTimeButt.addEventListener('click', () => {
    printBestTime(arrayTime);
  });

  divButt.append(bestTimeButt);
  divButt.append(buttonReload);

  divWin.append(h3Win);
  divWin.append(divButt);

  divGame.append(divWin);
};
