export const updateScore = () => {
  let scoresArray = JSON.parse(localStorage.getItem('scores')) || [0, 0, 0];
  //guardo el score del jugador
  const scoreh4 = document.querySelector('.scoreNum'); //el score del juego
  const score = scoreh4.innerText;

  scoresArray.push(score); //añado el nuevo score en el arrayde scores
  scoresArray.sort((a, b) => b - a); //ordeno mi array del score mayor a menor
  scoresArray.pop(); //elimino el ultimo score, par que guarde solo los primeros 3
  console.log(scoresArray);
  localStorage.setItem('scores', JSON.stringify(scoresArray));
  return scoresArray;
};
