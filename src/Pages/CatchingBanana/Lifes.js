export const printLifes = () => {
  const divGame = document.querySelector('#catching');
  for (let i = 1; i < 4; i++) {
    const life = document.createElement('img');
    life.src = './public/assets/CatchingBanana/life.png';
    life.className = 'life';
    divGame.append(life);
  }
};
