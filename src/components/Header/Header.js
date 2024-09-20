import { initCatch } from '../../Pages/CatchingBanana/CatchingBanana';
import { initPuzzle } from '../../Pages/Puzzle/Puzzle';
import { initTres } from '../../Pages/TresEnRaya/TresEnRaya';
import './Header.css';

export const printHeader = () => {
  const divApp = document.querySelector('#app');
  const header = document.createElement('header');
  const divTitle = document.createElement('div');
  const h1 = document.createElement('h1');
  const imgController = document.createElement('img');

  //botones de los juegos
  const buttonCatching = document.createElement('button');
  const buttonPuzzle = document.createElement('button');
  const buttonTresEnRaya = document.createElement('button');

  h1.innerText = 'GAMES HUB';
  imgController.src = './public/assets/controller.png';
  imgController.alt = 'controller';
  buttonCatching.innerText = 'Catching banana';
  buttonPuzzle.innerText = 'Puzzle';
  buttonTresEnRaya.innerText = 'Tres en raya';

  divTitle.className = 'title';

  buttonCatching.addEventListener('click', initCatch);
  buttonPuzzle.addEventListener('click', () => {
    initPuzzle();
  });
  buttonTresEnRaya.addEventListener('click', () => {
    initTres();
  });

  divTitle.append(h1);
  divTitle.append(imgController);
  header.append(divTitle);
  header.append(buttonCatching);
  header.append(buttonPuzzle);
  header.append(buttonTresEnRaya);

  divApp.append(header);
};
