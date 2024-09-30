//creo las piezas del puzzle en mi pagina. Las paso en un array, que sirve para poder pintarlas luego en orden random
export const createPiezas = (listPiezas) => {
  for (let i = 1; i < 13; i++) {
    const imgPieza = document.createElement('img');
    imgPieza.src = `./public/assets/Puzzle/${i}.png`;
    imgPieza.className = 'pieza';
    listPiezas.push(imgPieza);
  }

  //mezclar el array con las piezas para pintarlas mezcladas, no en orden
  listPiezas.reverse(); //lo pongo en reverse para que se intuya menos

  //metodo Fisher-Yates para mezclar elementos del array:
  for (let i = 0; i < listPiezas.length; i++) {
    let randomPos = Math.floor(Math.random() * listPiezas.length);
    let temp = listPiezas[i]; //guardo pos del bucle
    listPiezas[i] = listPiezas[randomPos]; //guardo elemento en pos random en la pos del bucle
    listPiezas[randomPos] = temp; //pos random : le paso el elemento en la pos del bucle guardado antes en la variable temp
    //asi ninguna posicion se queda vacia
  }

  return listPiezas;
};

//pinto las piezas en mi pagina
export const printPiezas = (listPiezas, divPiezas) => {
  for (const pieza of listPiezas) {
    divPiezas.append(pieza);
  }
};
