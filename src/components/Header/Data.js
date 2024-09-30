//creo array para botones para elegir el juego

import { initCatch } from '../../Pages/CatchingBanana/CatchingBanana';
import { initPuzzle } from '../../Pages/Puzzle/Puzzle';
import { initTres } from '../../Pages/TresEnRaya/TresEnRaya';

export let arrayButtonGames = [
  { nombre: 'Catching banana', game: initCatch },
  { nombre: 'Puzzle', game: initPuzzle },
  { nombre: 'Tres en raya', game: initTres }
];
