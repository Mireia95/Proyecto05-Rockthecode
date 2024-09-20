//funcion para crear botón PLAY para los juegos
export const createButtonPlay = () => {
  const buttonPlay = document.createElement('button');
  buttonPlay.innerHTML =
    '<img src="./public/assets/CatchingBanana/play.png" alt="play" />';

  buttonPlay.className = 'play';

  return buttonPlay;
};

//cuando hago click
export const buttonPlayEvent = (buttonPlay) => {
  buttonPlay.classList.add('pressed'); //animacion OUT
  //elimino el boton PLAY despues de 1 segundo, que es cuanto dura la animacion
  buttonPlay.remove();
  /*  setTimeout(() => {
    buttonPlay.remove();
  }, 1000); */
};
