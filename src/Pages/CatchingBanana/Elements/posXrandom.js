//funcion para devolver una posicion random en X y crear el elemento respetando las posiciones de elementos ya existentes
export const posXrandom = (arrayPosActive) => {
  console.log(arrayPosActive);
  const divGame = document.querySelector('#catching');

  //doy un valor al margen entre elementos dependiendo si estamos en una pantalla grande o pequeña
  let margen;
  if (divGame.offsetWidth < 360) {
    //quiere decir pantalla movil
    margen = 35; //poruqe el elemento es width=30px
  } else {
    margen = 60;
  }

  const limitX = divGame.offsetWidth - 100; //limite del div donde pueden crearse los elementos

  //chequeo si la pos X del nuevo elemento que voy a crear (banana, o rama) está bien. Puede crearse solo si respecta un margen con las otras posiciones de los elementos ya existentes. Las posiciones existentes estan guardadas en el array arrayPosActive

  //1. si el array está vacio (primer elemento que se crea) entonces dame una posX random
  if (arrayPosActive.length === 0) {
    let randomX = Math.floor(Math.random() * limitX); //pos random de X del elemento
    return randomX;
  } //2. si en cambio hay ya posiciones guardadas haz la comprobacion con ellas
  else {
    /*  creo variable possiblePrint que detecta si es posible crear el nuevo elemento. Le doy valor false para que el ciclo while empieze siempre. Cuando possiblePrint se ponga true, el ciclo while pararà */
    let possiblePrint = false;
    let randomX;
    while (possiblePrint === false) {
      randomX = Math.floor(Math.random() * limitX);
      /* uso el metodo every(): devuelve true sólo si todos los elementos cumplen la condición.  */
      /* con every() chequeo el arrayPosActive. Si el randomX creado se aleja de 60 (que es el margen pactado) respecto a los otros numeros guardados, entonces la variable possiblePrint es igua la TRUE. Y el ciclo while se para, devolviendo la pos randomX valida */
      possiblePrint = arrayPosActive.every(
        (pos) => Math.abs(pos - randomX) >= margen
      );
    }
    return randomX;
  }
};

export const assignPosX = (element, randomX) => {
  element.style.left = randomX + 'px';
  element.style.top = '-60px'; //para que se cree arriba escondida, luego baja y se ve
};
