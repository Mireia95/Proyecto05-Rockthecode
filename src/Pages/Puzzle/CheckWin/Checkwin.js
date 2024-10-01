import { printWin } from './PrintWin';

export const checkWin = () => {
  const divBlankAll = document.querySelectorAll('.blank');

  let checkWin = 0; //si las piezas están en el sitio correcto sumo 1. Cuando llego a 12 quiere decir que he ganado

  //uso un ciclo for para chequear cada celda, si lleva la imagen correcta
  for (let i = 0; i < divBlankAll.length; i++) {
    const divBlank = divBlankAll[i];

    let img = divBlank.querySelector('img'); //obtengo la imagenm hija de la celda

    //si existe la imagen hija, entonces empiezo a chequear
    if (img) {
      let src = img.src;
      if (src.includes(`${i + 1}.png`)) {
        //si el src de la imagen incluye el nombre correcto de la imagen (por ejemplo en el primero giro del bucle chequeo la primera celda: miro si hay "1.png"), entnoces es correcto.
        console.log('correct');
        checkWin++;
      } else {
        console.log('incorrect');
      }
    }
  }

  if (checkWin === 12) {
    printWin();
  }
};
