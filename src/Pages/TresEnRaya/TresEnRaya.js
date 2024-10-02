import { cleanMain } from '../../components/Utils/CleanMain';
import { printCell } from './Cell';
import { printWins } from './Winner/TotWins';
import './TresEnRaya.css';
import { printPlayerturn } from './Turn';
import { checkWinner } from './Winner/CheckWinner';

let playerX = true; //creo variable para saber quien de los 2 jugadores está jugando

let arrayCeldas = ['', '', '', '', '', '', '', '', '']; //creo array donde guardarè la posicion de X y O

//funcion para inicializar el juego tres en raya
export const initTres = () => {
  cleanMain(); //limpio el main
  printPlayerturn(playerX); //le paso okayerX para saber si es turno de X o O
  printCell(); //pinto mi celda
  printWins(); //pinto los juegos ganados de cadas jugador, usando sesionStorage

  //evento click en la celda
  const celdasAll = document.querySelectorAll('.celda');
  //uso for each para revisar todas las celdas y añadirle el evento click. Como parametros le paso tanto la celda como el index, para saber cual div estoy pulsando
  celdasAll.forEach((celda, index) => {
    celda.addEventListener('click', () => {
      play(celda, index);
    });
  });
};

//logica del juego
const play = (celda, index) => {
  //turno de jugador X
  if (playerX === true) {
    if (celda.innerHTML === '') {
      celda.innerHTML =
        "<img src='./public/assets/Tris/X.png' alt='judagor X'>";
      playerX = false; //se acaba turno de X
      arrayCeldas[index] = 'X'; //guardo en el array la posicion pulsada
      console.log(arrayCeldas);
    }
  } //turno de jugador O
  else {
    if (celda.innerHTML === '') {
      celda.innerHTML =
        "<img src='./public/assets/Tris/circle.png' alt='judagor circle'>";
      playerX = true; //vuelve el turno de X
      arrayCeldas[index] = 'O'; //guardo en el array la posicion pulsada
      console.log(arrayCeldas);
    }
  }
  checkWinner(arrayCeldas);
};
