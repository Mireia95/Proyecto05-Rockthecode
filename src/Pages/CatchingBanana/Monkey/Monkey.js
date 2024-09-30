//creo mi personaje principal, el mono

export const printMonkey = () => {
  const divGame = document.querySelector('#catching');
  const imgMonkey = document.createElement('img');
  imgMonkey.src = './public/assets/CatchingBanana/mono.png';
  imgMonkey.alt = 'monkey character';
  imgMonkey.className = 'monkey';

  document.addEventListener('keydown', (e) => {
    moveMonkey(e, imgMonkey);
  });

  divGame.append(imgMonkey);
};

//funcion que controla el movimiento del monkey
const moveMonkey = (e, monkey) => {
  const divGame = document.querySelector('#catching');
  let limitRight = divGame.offsetWidth - 60; //con offsetWidth obtengo el width del divGames. Le resto 60 para darle un margen de limite y que el personaje no salga de los bordes
  let limitLeft = 60; //limite movimiento izquierda
  let posX = monkey.offsetLeft; //con offsetLeft obtengo la posicion en X del monkey segun su elemento padre (divGames)
  let speed = 3;

  if (e.key === 'ArrowRight') {
    //si la pos del mono es < del limite derecho establecido, y se puede mover, entonces muevete a la derecha
    if (posX < limitRight) {
      let posX = monkey.offsetLeft; //con offsetLeft obtengo la posicion en X del monkey segun su elemento padre (divGames)
      monkey.style.left = posX + speed + 'px'; //le paso el nuevo numero a style.left
    }
  }

  if (e.key === 'ArrowLeft') {
    //si la pos del mono es > del limite izq establecido, entonces muevete a la izquierda
    if (posX > limitLeft) {
      let posX = monkey.offsetLeft; //con offsetLeft obtengo la posicion en X del monkey segun su elemento padre
      posX -= 5; //le resto 5 para que se mueva a la izquierda
      monkey.style.left = posX + 'px'; //le paso el nuevo numero a style.left
    }
  }
};
