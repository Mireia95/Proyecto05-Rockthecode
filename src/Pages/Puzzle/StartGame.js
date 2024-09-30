export const startGame = () => {
  const piezasAll = document.querySelectorAll('.pieza');
  console.log(piezasAll);

  const divBlankAll = document.querySelectorAll('.blank');
  console.log(divBlankAll);

  //!evento al dragging la pieza
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
    });
  });

  divBlankAll.forEach((divBlank) => {
    //DRAGOVER: area donde es posible dejar las piezas
    divBlank.addEventListener('dragover', (e) => {
      console.log('deja aparcada la pieza');
      e.preventDefault(); //evito que salga el icono de prohibicion al dragging una pieza
      const movingPieza = document.querySelector('.moving');
      divBlank.append(movingPieza);
      movingPieza.classList.add('inserted'); //classe per cambiar tamaño a la pieza cuando entra en el puzzle
    });
  });
};
