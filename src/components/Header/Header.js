import '../Utils/Anims.css';
import { arrayButtonGames } from './Data';
import './Header.css';

export const printHeader = () => {
  const divApp = document.querySelector('#app');
  const header = document.createElement('header');
  const divTitle = document.createElement('div');
  const h1 = document.createElement('h1');
  const imgController = document.createElement('img');

  h1.innerText = 'GAMES HUB';
  imgController.src = './public/assets/controller.png';
  imgController.alt = 'controller';

  divTitle.className = 'title';

  divTitle.append(h1);
  divTitle.append(imgController);
  header.append(divTitle);

  //botones de los juegos
  for (const game of arrayButtonGames) {
    const button = document.createElement('button');
    button.innerText = game.nombre;

    button.addEventListener('click', (e) => {
      game.game();
      const allButtons = document.querySelectorAll('button');
      for (const button of allButtons) {
        button.classList.remove('selected');
      }

      e.target.className = 'selected';
    });
    header.append(button);
  }

  divApp.append(header);
};
