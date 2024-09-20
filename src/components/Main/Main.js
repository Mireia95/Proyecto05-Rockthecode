import './Main.css';

export const printMain = () => {
  const divApp = document.querySelector('#app');
  const main = document.createElement('main');
  divApp.append(main);
};
