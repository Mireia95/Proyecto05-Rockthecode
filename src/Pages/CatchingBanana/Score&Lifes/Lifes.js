export const printLifes = (divElements) => {
  const divLifes = document.createElement('div');
  divLifes.className = 'lifes';
  for (let i = 1; i < 4; i++) {
    const life = document.createElement('img');
    life.src = './public/assets/CatchingBanana/life.png';
    life.className = 'life';
    divLifes.append(life);
  }
  divElements.append(divLifes);
};

//funcion para comprobar cuantas vidas tiene el jugador
export const checkLifes = () => {
  const lifes = document.querySelectorAll('.life'); //chequeo las vidas en el juego
  return lifes.length;
};
