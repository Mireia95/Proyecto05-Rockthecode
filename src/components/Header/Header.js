import '../Utils/Anims.css';
import './Header.css';

export const printHeader = () => {
  const divApp = document.querySelector('#app');
  const header = document.createElement('header');
  const divTitle = document.createElement('div');
  const h1 = document.createElement('h1');
  const imgController = document.createElement('img');

  h1.innerText = 'Bienvenido a Games Hub';
  imgController.src = './public/assets/controller.png';
  imgController.alt = 'controller';

  divTitle.className = 'title';

  divTitle.append(h1);
  divTitle.append(imgController);
  header.append(divTitle);

  divApp.append(header);
};
