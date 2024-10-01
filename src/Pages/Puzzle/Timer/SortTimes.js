//funcion para ordenar mi array con los tiempos de cada partida

export const sortTime = (arrayTime) => {
  const checkTotSeconds = (time) => {
    //calculo los segundos totales de cada tiempo
    let minutes = Number(time.split(':')[0]); //divido el string en dos y me quedo con la primera parte (los minutos)
    let seconds = Number(time.split(':')[1]); //divido el string en dos y me quedo con la primera parte (los segundos)
    minutes = minutes * 60; //por cada minuto sumo 60 segundos
    let totSeconds = minutes + seconds; //obtengo los segundos totales
    return totSeconds;
  };

  //ordeno el arrayTime
  arrayTime.sort((a, b) => {
    let totSecA = checkTotSeconds(a);
    let totSecB = checkTotSeconds(b);
    return totSecA - totSecB; //uso return si no no funciona, para que devuelva el resultado y el metodo .sort pueda ordenar
  });

  return arrayTime;
};
