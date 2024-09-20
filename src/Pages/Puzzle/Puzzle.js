//inicializacion de puzzle game

import {
  buttonPlayEvent,
  createButtonPlay
} from '../../components/Utils/buttonPlay';
import { printBlank } from './PiezasBlank';
import { createPiezas, printPiezas } from './PrintPiezas';
import './Puzzle.css';

let listPiezas = [];

export const initPuzzle = () => {
  const main = document.querySelector('main');
  main.innerHTML = ''; //limpio el main
  listPiezas = []; //vacio el array con las piezas del puzzle, si no cada vez que inicio el juego se duplican las piezas
  const divGame = document.createElement('div');
  const buttonPlay = createButtonPlay();
  const divPiezas = document.createElement('div');

  divGame.id = 'puzzle';
  divPiezas.className = 'piezas';

  buttonPlay.addEventListener('click', () => {
    buttonPlayEvent(buttonPlay);
    divGame.style.backgroundImage = 'none';
    divGame.classList.add('startPuzzle');
    main.append(divPiezas); //pinto el div Piezas

    //creo piezas y demas
    createPiezas(listPiezas); //creo las piezas del puzzle y las inserto dentro el array
    printPiezas(listPiezas, divPiezas); //una vez creadas las pinto en mi pagina
    printBlank(); //funcion para pintar los divs vacíos dentro de la grid de divGame
    startGame();
  });

  divGame.append(buttonPlay);
  main.append(divGame);

  //* movido todo en la funcion startGame aqui debajo
  //evento al dragging la pieza
  /* piezasAll.forEach((pieza) => {
    pieza.addEventListener('dragstart', () => {
      console.log('preso');
      pieza.classList.add('moving');
    });

    pieza.addEventListener('dragend', () => {
      pieza.classList.remove('moving');
    });
  }); */

  //evento al mover la pieza dentro el puzzle
  /* divGame.addEventListener('dragover', (e) => {
    console.log('sei dentro al riquadro');
    e.preventDefault(); //evito que salga el icono de prohibicion al dragging una pieza
    const movingPieza = document.querySelector('.moving');
    divGame.append(movingPieza);
    movingPieza.classList.add('inserted'); //classe per cambiar tamaño a la pieza cuando entra en el puzzle
  }); */

  //!evento para sacar la pieza del puzzle y meterla de nuevo en el div de piezas
  /*  divPiezas.addEventListener('dragover', (e) => {
    console.log('deja aparcada la pieza');
    e.preventDefault(); //evito que salga el icono de prohibicion al dragging una pieza
    const movingPieza = document.querySelector('.moving');
    divPiezas.append(movingPieza);
    movingPieza.classList.remove('inserted'); //classe per cambiar tamaño a la pieza cuando entra en el puzzle
  }); */
};

const startGame = () => {
  const piezasAll = document.querySelectorAll('.pieza');
  console.log(piezasAll);

  const divBlankAll = document.querySelectorAll('.blank');
  console.log(divBlankAll);

  //!evento al dragging la pieza
  piezasAll.forEach((pieza) => {
    //DRAGSTART: cuando cojo la pieza
    pieza.addEventListener('dragstart', () => {
      console.log('preso');
      pieza.classList.add('moving');
    });

    //DRAGEND: cuando dejo la pieza
    pieza.addEventListener('dragend', () => {
      pieza.classList.remove('moving');
    });
  });

  divBlankAll.forEach((divBlank) => {
    divBlank.addEventListener('dragover', (e) => {
      console.log('deja aparcada la pieza');
      e.preventDefault(); //evito que salga el icono de prohibicion al dragging una pieza
      const movingPieza = document.querySelector('.moving');
      divBlank.append(movingPieza);
      movingPieza.classList.add('inserted'); //classe per cambiar tamaño a la pieza cuando entra en el puzzle
    });
  });
  /* 
    divBlank.addEventListener('dragover', (e) => {
      console.log('deja aparcada la pieza');
      e.preventDefault(); //evito que salga el icono de prohibicion al dragging una pieza
      const movingPieza = document.querySelector('.moving');
      divBlank.append(movingPieza);
      movingPieza.classList.remove('inserted'); //classe per cambiar tamaño a la pieza cuando entra en el puzzle 
  }); 
   divPiezas.addEventListener('dragover', (e) => {
    console.log('deja aparcada la pieza');
    e.preventDefault(); //evito que salga el icono de prohibicion al dragging una pieza
    const movingPieza = document.querySelector('.moving');
    divPiezas.append(movingPieza);
    movingPieza.classList.remove('inserted'); //classe per cambiar tamaño a la pieza cuando entra en el puzzle */
};
