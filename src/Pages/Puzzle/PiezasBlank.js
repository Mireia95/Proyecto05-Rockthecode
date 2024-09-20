//funcion que permite pintar los divs vacios dentro de la grid de divGames, para poder luego añadirle el evento dragover y poder mover encima de ellos las piezas del puzzle
export const printBlank = () => {
  const divGame = document.querySelector('#puzzle');
  for (let i = 0; i < 12; i++) {
    const divBlank = document.createElement('div');
    divBlank.className = 'blank';
    divGame.append(divBlank);
  }
};
