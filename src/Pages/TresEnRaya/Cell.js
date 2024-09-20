import {
  buttonPlayEvent,
  createButtonPlay
} from '../../components/Utils/buttonPlay';

export const printCell = () => {
  const main = document.querySelector('main');
  const divGame = document.createElement('div');
  divGame.id = 'tres';

  for (let i = 0; i < 9; i++) {
    const div = document.createElement('div');
    div.className = 'celda';
    divGame.append(div);
  }

  //* BUTTON PLAY SIRVE?
  /* const buttonPlay = createButtonPlay();

  buttonPlay.addEventListener('click', () => {
    buttonPlayEvent(buttonPlay);
  }); */

  // divGame.append(buttonPlay);
  main.append(divGame);
};
