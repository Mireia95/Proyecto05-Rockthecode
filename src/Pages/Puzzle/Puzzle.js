//inicializacion de puzzle game

import {
  buttonPlayEvent,
  createButtonPlay
} from '../../components/Utils/buttonPlay';
import { printBlank } from './PiezasBlank';
import { createPiezas, printPiezas } from './PrintPiezas';
import { startGame } from './StartGame.js';
import './Puzzle.css';
import { cleanMain } from '../../components/Utils/CleanMain.js';

let listPiezas = [];

export const initPuzzle = () => {
  cleanMain(); //limpio el main
  const main = document.querySelector('main');
  listPiezas = []; //vacio el array con las piezas del puzzle, si no cada vez que inicio el juego se duplican las piezas
  const divGame = document.createElement('div');
  const buttonPlay = createButtonPlay();
  const divPiezas = document.createElement('div');

  divGame.id = 'puzzle';
  divPiezas.className = 'piezas';

  buttonPlay.addEventListener('click', () => {
    buttonPlayEvent(buttonPlay); //para la animacion
    divGame.style.backgroundImage = 'none';
    //?divGame.classList.add('startPuzzle');
    main.append(divPiezas); //pinto el div Piezas

    //creo piezas y demas
    createPiezas(listPiezas); //creo las piezas del puzzle y las inserto dentro el array listPiezas
    printPiezas(listPiezas, divPiezas); //una vez creadas las pinto en mi pagina
    printBlank(); //funcion para pintar los divs vacíos dentro de la grid de divGame
    startGame(); //play the game
  });

  divGame.append(buttonPlay);
  main.append(divGame);
};
