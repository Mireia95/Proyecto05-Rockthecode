import { printLifes } from './Lifes';
import { printScore } from './Score';

//funcion para pintar el score y las vidas mientras el juego está en play
export const printScoreAndLife = () => {
  const divGame = document.querySelector('#catching');
  const divElements = document.createElement('div'); //div que incluye el score + las vidas
  divElements.className = 'scoreAndLife';
  printScore(divElements); //pinto los puntos
  printLifes(divElements); //pinto las vidas

  divGame.append(divElements);
};
