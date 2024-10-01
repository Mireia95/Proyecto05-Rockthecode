//*juegos Catching banana
import './CatchingBanana.css';
import {
  buttonPlayEvent,
  createButtonPlay
} from '../../components/Utils/buttonPlay';

import { startCathing } from './StartCatching';
import { cleanMain } from '../../components/Utils/CleanMain';
import { printHighScore } from './Score&Lifes/Highscore';
import { createMusicCatching } from '../../components/Utils/Music';
import { createRulesCatching } from '../../components/Utils/RulesGame';

//inicializar el juego
export const initCatch = () => {
  cleanMain();
  const main = document.querySelector('main');
  const divGame = document.createElement('div');
  divGame.id = 'catching';
  const buttonPlay = createButtonPlay();
  //añado musica al juego
  const music = createMusicCatching();

  const rulesGame = createRulesCatching();

  buttonPlay.addEventListener('click', () => {
    //empieza la  musica
    music.play();
    buttonPlayEvent(buttonPlay);
    rulesGame.remove();
    startCathing();
  });

  divGame.append(rulesGame);
  divGame.append(buttonPlay);
  divGame.append(music);
  main.append(divGame);
};
