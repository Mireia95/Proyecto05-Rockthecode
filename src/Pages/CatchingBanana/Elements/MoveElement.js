import { printGameOver } from '../Gameover/Gameover';
import { checkLifes } from '../Score&Lifes/Lifes';
import { addScore, subTrackScore } from './ChangeScore';
import { checkCollision } from './CheckCollision';
import { removeLife } from './RemoveLife';

//script para controlar los elementos que caen, como bananas y ramas
//chiamo il parametro element = sará banana o rama
//il parametro type indicherà si es elemento que suma score o si es el elemento que quita score

export const moveElement = (element, type) => {
  const divGame = document.querySelector('#catching');
  let isCollision = checkCollision(element); //isCollision será true si hay colision, y false si no hay colision

  //!comprobar las vidas
  let currentLifes = checkLifes();
  if (currentLifes === 0) {
    console.log('gameover');
    //para evitar que se pinte el gameover mas veces, para todas las bananas en el juego, chequeo que no esté ya cread
    const gameover = document.querySelector('.gameover');
    if (!gameover) {
      printGameOver();
    }
    return;
  }

  if (type === 'good') {
    //si el type es good es la banana
    //si ha habido la primera colision sumo puntos al score
    if (isCollision) {
      addScore();
      element.remove();
      return; //paro la funcion ,porque el elemento se ha eliminado
    }

    //si el elemento llega hasta el final de la pantalla sin colision, entonces quito 1 vida y elimino el elemento
    if (parseInt(element.style.top) === divGame.offsetHeight - 50) {
      removeLife();
      element.remove();
      return; //paro la funcion ,porque el elemento se ha eliminado
    }
  } else {
    //type is bad, es la rama
    if (isCollision) {
      subTrackScore();
      element.remove();
      return; //paro la funcion ,porque el elemento se ha eliminado
    }
  }

  let speed = 1; //speed con la cual bajarán los elementos
  let Y = parseInt(element.style.top);
  element.style.top = Y + speed + 'px'; //actualizo la altura del elemento para que baje segun el speed

  //creo animacion para que baje el elemento. Uso requestAnimationFrame porque se para solo al recargar o cerrar el juego (setIntervalcontinua). Es mas fluido. Para que continue a animar cada frame hay que llamar la funcion dentro la funcion. para que se repita
  requestAnimationFrame(() => {
    moveElement(element, type);
  });
};
