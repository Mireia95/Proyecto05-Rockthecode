//funcion para parar el juego. Llamada al hacer click al boton STOP

import { initCatch } from './CatchingBanana';

export const createButtonStop = () => {
  const buttonStop = document.createElement('button');
  buttonStop.innerHTML =
    '<img src="./public/assets/CatchingBanana/stop.png" alt="stop" />';
  buttonStop.className = 'stop';

  buttonStop.addEventListener('click', () => {
    stopGame();
  });

  return buttonStop;
};

const stopGame = () => {
  const music = document.querySelector('audio');
  music.pause();
  initCatch();
};
