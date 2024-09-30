//! funcion para chequear collision entre monkey y elementos que caen
//?let numCollision = 0; //variable colision para saber que ha habido la primera colision. Me sirve para sumar el score solo a la prmiera colision, cuando numCollision = 1

//collision con elementos bueno, como banana, suma puntos
export const checkCollision = (element) => {
  let isCollision = false;
  //para la colision uso getBoundingClientRect() que crea un rectangulo con las coordinadas de mi elemento. Creo este rectangulo tanto para el monkey como para el elemento que cae. Si los 2 rectangulos chocan, hay collision
  //getBoundingClientRect() devuelve las coordinadas de la viewport, no del div contenedor padre
  const monkey = document.querySelector('.monkey');
  let monkeyColRect = monkey.getBoundingClientRect(); //creo rectangulo de colision para el monkey
  let elementColRect = element.getBoundingClientRect(); //creo rectangulo de colision para el elemento que cae

  if (
    //*check colision horizontal.
    //Si la parte izquierda del elemento es < que la parte derecha del monkey && la parte del ele es > que la parte izq del monkey: //*hay colision horizontal
    elementColRect.left < monkeyColRect.right &&
    elementColRect.right > monkeyColRect.left &&
    //* check colision vertical
    //Si la parte baja del elemento es > que la parte superior del monkey (recuerda: el eje Y es 0 encima y va creciendo segun baja) //*hay colision
    elementColRect.bottom > monkeyColRect.top
  ) {
    console.log('colision!!!!');
    //pongo la variable colision en true para saber que ha habido colision. Esta variable me sirve para quitar vidad o poner puntos, y eliminar el elemento
    isCollision = true;
  }
  return isCollision;
};
