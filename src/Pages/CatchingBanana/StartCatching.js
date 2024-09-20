import { printBananas } from './Bananas';
import { printLifes } from './Lifes';
import { printMonkey } from './Monkey';
import { createButtonStop } from './StopGame';

//al pulsar PLAY empezamos a jugar
export const startCathing = () => {
  const divGame = document.querySelector('#catching');
  printMonkey(); //creo y pinto el personaje

  printBananas(); //creo y pinto las bananas que bajan

  printLifes(); //pinto las vidas

  //!PROVA per richiamare le vite
  const lifes = document.querySelectorAll('.life');
  // console.log(lifes[2]);
  //! fine prova

  const buttonStop = createButtonStop(); //creo botón STOP juego

  divGame.append(buttonStop);
};
