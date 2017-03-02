El siguiente codigo representa una solucion al problema cube-summation, encontrado en la plataforma hackerrack. Para la solucion escogi utilizar Javascript junto con el framework meteorJS.

como probar el codigo (no creé testes automatizados):

1) instalar meteor en lça estacion a usar (https://www.meteor.com/install)
2) ir al directorio del proyecto.
3) comando: meteor npm install
4) comando: meteor
5) por defecto el proyecto estará rodando en localhost:3000



Preguntas asociadas al codigo...

1) Capaz de la aplicacion:
	Me encuentro utilizando el modelo de estructura recomendado para meteorJS framework (https://guide.meteor.com/structure.html#javascript-structure), el cual se basa en lazy evaluation de los archivos, dependiendo de la carpeta donde estos se encuentren almacenados. Por cuestiones de tiempo estoy trabajando solo en la capa de cliente. Este es todo el codigo que se encuentre en la carpeta client/, que a su vez en este caso está importando codigo de la carpeta imports.

2) Clases y responsabilidades:
	Solo me encuentro utilizando una clase interna del framework llamada Templates, que sirve para mapear valores de entrada o salida en la interfaz de usuario, manejar triggers de eventos, entre otras cosas. A nivel de HTML un template es un pedazo de codigo de html que va a tener una logica que va a ser manejada en un .js.


