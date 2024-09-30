//añado puntos si hemos tenido colision con la banana
export const addScore = () => {
  const score = document.querySelector('.scoreNum');
  const addPuntos = 3;
  const actualScore = parseInt(score.innerHTML);
  const newScore = actualScore + addPuntos;
  score.innerHTML = `${newScore}`;
};

//quito puntos si hemos tenido colision con la rama
export const subTrackScore = () => {
  const score = document.querySelector('.scoreNum');
  const removePuntos = 10;
  const actualScore = parseInt(score.innerHTML);
  let newScore = actualScore - removePuntos;
  if (newScore < 0) {
    newScore = 0;
  }
  score.innerHTML = `${newScore}`;
};
