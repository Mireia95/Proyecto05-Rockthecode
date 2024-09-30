import { arrayPosActive } from './Data';
import { moveElement } from './MoveElement';
import { assignPosX, posXrandom } from './posXrandom';

const createRama = () => {
  const rama = document.createElement('img');
  rama.src = './public/assets/CatchingBanana/rama.png';
  rama.className = 'element';

  //*posicion inicial
  //creo posicion X random, dentro el limite del divGames, respetando las posiciones de los elementos ya existentes
  let randomX = posXrandom(arrayPosActive);
  console.log(`randomX valido es: ${randomX}`);
  arrayPosActive.push(randomX); //añado posicion al array de posiciones
  console.log(arrayPosActive);

  //para que el juego no se rompa elimino la primera posicion para que pueda pintarse otro nuevo elemento. Si llega a mas de 6 no encuentra ningun randomX disponible y alli el juego se para
  if (arrayPosActive.length > 5) {
    arrayPosActive.shift(); //elimino la primera posicion
  }

  //asigno la posicion X a la rama
  assignPosX(rama, randomX);
  return rama;
};

export const printRama = () => {
  const rama = createRama();
  const divGame = document.querySelector('#catching');
  divGame.append(rama);

  const type = 'bad'; //type sirve para diferenciar el tipo de elemento. Si es "good" es el que suma puntos (banana). Si es bad es el que quita puntos (rama)
  moveElement(rama, type);
};
