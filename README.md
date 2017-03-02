RESPUESTA CODING CHALLENGE(70pts):

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




PREGUNTAS(10pts):

1) Principio de responsabilidad unica.
	Supongamos que dividimos un software en un conjunto de funcionalidades que este debe poseer. El principio de responsabilidad unica indica que cada responabilidad debe ser manejada y encapsulada por una clase, que a su vez, es responsable solo por esta responsabilidad. Esto permite principalmente, tener un codigo mas robusto, mas facil de mantener, ya que cambia una funcionalidad significa solo modificar/refactorar una clase. y un codigo mas facil de entender por otros desenvolvedores que no participaron de el desarrollo inicial.

2) Caracteristicas de un buen codigo limpio...

	* El codigo deberia estar lo mas apegado posible al principio de responsabilidad unica.
	* El codigo debe estar acompañado de una buena documentacion.
	* El codigo debe seguir las buenas practicas propias de cada lenguaje.
	* El codigo debe estar hecho pensando en futuras refactoraciones/mantenimientos.
			Por ejemplo, en javascript muchos desenvolvedores gustan de hacer....
			if(condition) statement....cuando el if implica un unico statement...
			Si el codigo va a ser mantenido por otro desenvolvedor, este puede confundir con el codigo y se ve en la necesitad de escribir mas codigo si desea escribir mas statements por causa del if...
			En ese caso considero mejor usar if(condition){statement} 


