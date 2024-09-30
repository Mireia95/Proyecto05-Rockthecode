import { backCatching } from '../../../components/Utils/backButton';
import { printGameOver } from '../Gameover/Gameover';
import './Highscore.css';

//pinto el score en la pantalla del juego. Le paso como argumento a la funcion el array que guarda los 3 mejores scores
export const printHighScore = (arrayScore) => {
  console.log(arrayScore);
  const divGame = document.querySelector('#catching');

  const divScore = document.createElement('div');
  const h2 = document.createElement('h2');

  divScore.append(h2);

  //creo 3 divs para los 3 mejores scores
  for (let i = 0; i < 3; i++) {
    const divPos = document.createElement('div');
    const h3Pos = document.createElement('h3');
    h3Pos.innerText = `${i + 1} `;

    const h4Score = document.createElement('h4');
    h4Score.innerText = `${arrayScore[i]}  puntos `;

    divPos.append(h3Pos);
    divPos.append(h4Score);
    divScore.append(divPos);
  }

  //reload juego
  const backButton = backCatching();
  backButton.addEventListener('click', () => {
    printGameOver();
    divScore.remove();
  });

  h2.innerText = 'HIGH SCORE'; //falta ponerle el font family

  divScore.className = 'highScore';

  divScore.append(backButton);

  divGame.append(divScore);
};
