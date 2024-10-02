import { sortTime } from './SortTimes';

export const saveTime = () => {
  let timesArray = JSON.parse(localStorage.getItem('times')) || [];
  //guardo el score del jugador
  const pTime = document.querySelector('.timer'); //el score del juego
  const splitTextTime = pTime.innerHTML.split(' - '); //divide el string en 2. El separador es el -
  //devuelve un array con las 2 string. Yo necesito la segunda parte: 00:00. La guardo en la variable time
  const time = splitTextTime[1];
  timesArray.push(time); //añado el nuevo score en el array de times

  timesArray = sortTime(timesArray); //ordeno el array con el tiempo menor primero
  console.log(timesArray);

  if (timesArray.length > 3) {
    timesArray.pop(); //elimino el ultimo score, para que guarde solo los primeros 3
  }

  localStorage.setItem('times', JSON.stringify(timesArray));
  return timesArray;
};
