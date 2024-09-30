import './/Score&Lifes/scoreAndLife.css';

import { createButtonStop } from './StopGame';
import { printBanana } from './Elements/Bananas';
import { printRama } from './Elements/Rama';
import { printMonkey } from './Monkey/Monkey';
import { printScoreAndLife } from './Score&Lifes/Score&Life';

//al pulsar PLAY empezamos a jugar
export const startCathing = () => {
  const divGame = document.querySelector('#catching');
  printMonkey(); //creo y pinto el personaje

  printScoreAndLife(); //Pinto el div para el score y las vidas

  //pinto las bananas que bajan con un setInterval. Pinta solo si el jugador tiene vidas

  let bananaInterval; //interval para pintar las bananas

  bananaInterval = setInterval(() => {
    const lifes = document.querySelectorAll('.life'); //chequeo las vidas en el juego
    console.log(lifes);
    //si hay vidas, pinto bananas, si no hay vidas pinto gameover y paro el juego
    if (lifes.length > 0) {
      console.log('pinto banana');
      printBanana(); //creo y pinto las bananas que bajan
    } else if (lifes.length === 0) {
      clearInterval(bananaInterval);
    }
  }, 3000);

  const buttonStop = createButtonStop(); //creo botón STOP juego

  divGame.append(buttonStop);
};
