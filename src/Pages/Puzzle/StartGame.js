import { checkWin } from './CheckWin/Checkwin';

export const startGame = () => {
  const piezasAll = document.querySelectorAll('.pieza');

  const divBlankAll = document.querySelectorAll('.blank');

  const divPiezas = document.querySelector('.piezas');

  //*evento al dragging la pieza
  piezasAll.forEach((pieza) => {
    //DRAGSTART: cuando cojo la pieza
    pieza.addEventListener('dragstart', () => {
      console.log('moviendo');
      pieza.classList.add('moving');
    });

    //DRAGEND: cuando dejo la pieza
    pieza.addEventListener('dragend', () => {
      pieza.classList.remove('moving');
      console.log('dejada la pieza');
      //chequeo si el jugador ha completado el puzzle correctamente
      checkWin();
    });
  });

  divBlankAll.forEach((divBlank) => {
    //DRAGOVER: area donde es posible dejar las piezas. Será posible solo en los divs blancos de mi div del juego
    divBlank.addEventListener('dragover', (e) => {
      console.log('deja aparcada la pieza');
      e.preventDefault(); //evito que salga el icono de prohibicion al dragging una pieza
      const movingPieza = document.querySelector('.moving');
      //si la pieza está vacia (no contiene ya una imagen), entonces puedo insertar la pieza que estoy moviendo
      if (divBlank.innerHTML === '') {
        divBlank.append(movingPieza);
        movingPieza.classList.add('inserted'); //classe per cambiar tamaño a la pieza cuando entra en el puzzle
      }
    });

    //si queremos devolver la pieza de nuevo en el div de las piezas, creo evento DRAGOVER para que nuestro divPiezas se convierta en un area donde es posible dejar las piezas
    divPiezas.addEventListener('dragover', (e) => {
      console.log('devuelve la pieza');
      e.preventDefault(); //evito que salga el icono de prohibicion al dragging una pieza
      const movingPieza = document.querySelector('.moving');
      divPiezas.append(movingPieza);
    });
  });
};
