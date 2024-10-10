import { printBackToHome } from './BackTohome';
import { arrayButtonGames } from './Data';

export const printGames = () => {
  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.id = 'games';

  //creo los 3 divs que contienen los juegos
  for (const game of arrayButtonGames) {
    const div = document.createElement('div');
    div.className = 'homeGames';
    //creo opcion para el hover
    const divHover = document.createElement('div');
    divHover.className = 'divHover';

    const h2 = document.createElement('h2');
    h2.innerText = game.nombre;

    const p = document.createElement('p');
    p.innerText = game.description;

    div.style.backgroundImage = `url(${game.BgImageHome})`;

    div.addEventListener('click', (e) => {
      game.game();
    });

    divHover.append(h2);
    divHover.append(p);
    div.append(divHover);
    section.append(div);
  }

  main.append(section);
};
