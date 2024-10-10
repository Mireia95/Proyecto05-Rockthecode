PROYECTO CON JUEGOS

El main tiene 1 seccion con 3 divs que permitirán elegir el juego.
Dentro la carpeta Componentes estarán:
-Header: El script Header.js pinta el titulo usa estos datos para pintar los botones y inicializar los juegos.

-Main: pinta el <main>. Tenemos:
-- el script Data.js contiene los nombres de los juegos y sus funciones para empezarlos. Si un día quisiermaos añadir un juego mas podríamos simplemente añadirlo en Data.js.
-- el script BacktoHome.js que pinta el botón que sirve para volver atrás a la página donde elegimos los juegos
-- el script SectionGames.js que pinta la pagina inicial de los juegos.

-Utils : algunos scripts usados durante el desarrollo en mas ocasiones

Dentro la carpeta Pages encontramos subcarpetas con cada juego.

CATCHING BANANA
Script principal: CatchingBanana.js
StartCatching.js: al pulsar el boton PLAY empiza la lógica del juego. Donde pinto el mono, y los elementos que bajan

La carpeta Elements incluye todo lo que está relacionado con los elementos que bajan: banana y rama. Tanto el crear los elementos como la lógica que tienen:
-Bananas.js permite crear y pintar las bananas
-Rama.js permite crear y pintar las ramas
-MoveElement.js es el script principal que hace que los elementos bajen, y chequea si hay colisión con el jugador. Si hay colisión hay consecuencias. Este script está usado tanto para las bananas, como para las ramas.

La carpeta Score&Lifes incluye todo lo que está relacionado a los puntos del juego y las vidas:
-Score&Lifes.js permite crear y pintar los puntos y las vidas
-ChangeScore.js permite cambiar los puntos dependiendo de si hay colision entre los elementos que bajan y el jugador
-UpdateScore.js permite guardar en localStorage los puntos de cada vez que jugamos
-Highscore.js permite pintar los puntos de las 3 mejores jugadas

PUZZLE
Script principal: Puzzle.js
StartGane.js es la logica del juego y permite empezarlo. Para este juego uso los eventos "drag"
La carpeta CheckWin permite identificar si el jugador ha rellenado el puzzle correctamente
La carpeta Timer incluye todo lo que está relacionado con el timer del juego. Tanto pintarlo como guardar los 3 mejores tiempos en localStorage. También incluye BestTime.js que permite pintar los 3 mejores tiempos.
PENDIENTE: añadir mas puzzles y dificultad, para que el jugador pueda entretenerse mas

TRES EN RAYA
Script principal: TresEnRaya.js. Aquí están 2 funciones: la que pinta el juego (funcion initTres) y la que permite la lógica al empezarlo (funcion play)

Dentro la carpeta Winner está toda la logica de quien gana
-Checkwinner.js permite saber si hay un ganador. Si hay, entonces pinto el ganador (script PrintWinner.js). Si hay empate pinto empate (script PrintDraw.js)
-Totwins.js permite pintar y actualizar los juegos ganados de cada jugador. Guardo los juegos usando sessionStorage

PENDIENTE: poner la opcion de 1 o 2 jugadores, para poder elegir si jugar contra el ordenador o en 2
