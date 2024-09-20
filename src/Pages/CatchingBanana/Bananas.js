//funcion para crear bananans que bajan
export const printBananas = () => {
  const divGames = document.querySelector('#catching');
  let lastPos = 0;
  let posXrandom = 0;
  setInterval(() => {
    const img = document.createElement('img');
    img.src = './public/assets/CatchingBanana/platanos.png';
    img.className = 'banana';
    //creo posicion X random, dentro el limite del divGames
    const limitX = divGames.offsetWidth - 100;

    if (Math.abs(posXrandom - lastPos) < 100) {
      posXrandom = Math.floor(Math.random() * limitX);
    }
    lastPos = posXrandom;
    //console.log(posXrandom);
    img.style.left = posXrandom + 'px';

    setInterval(() => {
      const posY = img.offsetTop;
      //*console.log(posY);
      img.style.top = posY + 10 + 'px';
    }, 200);

    divGames.append(img);

    //!prova
    console.log('ciaooooooooooooooooooooo');
    const monkey = document.querySelector('.monkey');
    //!non funziona
    /*  let posXmonkey = monkey.offsetWidth;
    let posYmonkey = monkey.offsetTop;
    console.log(posXmonkey);
    console.log(posYmonkey); */
  }, 2000);
};

//!CHECK COLLISION ENTRE BANANA Y MONKEY
const checkCollision = (banana) => {
  console.log('ciaooooooooooooooooooooo');
  const monkey = document.querySelector('.monkey');
  let posYBanana;
  let posXBanana;
  let posXmonkey = monkey.offsetWidth;
  let posYmonkey = monkey.offsetTop;
  console.log(posXmonkey);
  console.log(posYmonkey);
};
