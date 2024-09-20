//*juegos Catching banana

import {
  buttonPlayEvent,
  createButtonPlay
} from '../../components/Utils/buttonPlay';
import './CatchingBanana.css';
import { startCathing } from './StartCatching';

//inicializar el juego
export const initCatch = () => {
  const main = document.querySelector('main');
  main.innerHTML = ''; //limpio el main
  const divGame = document.createElement('div');
  divGame.id = 'catching';
  const buttonPlay = createButtonPlay();
  //añado musica al juego
  const music = document.createElement('audio');
  music.src = './public/assets/CatchingBanana/BGMusic.mp3';

  buttonPlay.addEventListener('click', () => {
    //empieza la  musica
    music.volume = '0.3';
    music.play();
    buttonPlayEvent(buttonPlay);
    startCathing();
  });

  divGame.append(buttonPlay);
  divGame.append(music);
  main.append(divGame);
};
