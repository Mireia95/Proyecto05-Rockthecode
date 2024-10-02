//crear elementos que caen como banana y rama

import { arrayPosActive } from './Data';
import { moveElement } from './MoveElement';
import { assignPosX, posXrandom } from './posXrandom';

const createBanana = () => {
  const banana = document.createElement('img');
  banana.src = './public/assets/CatchingBanana/platanos.png';
  banana.className = 'element';

  //*posicion inicial
  //creo posicion X random, dentro el limite del divGames, respetando las posiciones de los elementos ya existentes
  let randomX = posXrandom(arrayPosActive);
  console.log(`randomX valido es: ${randomX}`);

  arrayPosActive.push(randomX); //añado posicion al array de posiciones

  //para que el juego no se rompa elimino la primera posicion para que pueda pintarse otro nuevo elemento. Si llega a mas de 6 no encuentra ningun randomX disponible y alli el juego se para
  //?para el responsive tengo que saber el width de mi divGame. Para saber cuantos elementos pueden pintarse. Si el divGame es < 360 quiere decir que estoy en una pantalla de movil, entonces pintaré en posX random menos elementos, porque cabrán menos ya que el width es menor y tenemos margen entre elementos
  const divGame = document.querySelector('#catching');
  let divGameWidth = divGame.offsetWidth;
  if (divGameWidth < 360) {
    //?responsive
  }
  if (arrayPosActive.length > 5) {
    arrayPosActive.shift(); //elimino la primera posicion
  }

  //asigno la posicion X a la banana
  assignPosX(banana, randomX);

  return banana;
};

export const printBanana = () => {
  const banana = createBanana();
  const divGame = document.querySelector('#catching');
  divGame.append(banana);
  const type = 'good'; //type sirve para diferenciar el tipo de elemento. Si es "good" es el que suma puntos (banana). Si es bad es el que quita puntos (rama)

  moveElement(banana, type); //esta funcion necesita 2 parametros: el elemento que baja, y que tipo es (good o bad)
};
