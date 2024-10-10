import { cleanMain } from '../Utils/CleanMain';
import './backTohome.css';
import { printGames } from './SectionGames';

export const printBackToHome = () => {
  const main = document.querySelector('main');
  const button = document.createElement('button');

  button.innerHTML =
    '<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1728591515/ROCKTHECODE/iconos/back_vfmpkn.png" alt="volver"/>';

  button.className = 'backToHome';

  button.addEventListener('click', () => {
    cleanMain();
    printGames();
  });

  main.append(button);
};
