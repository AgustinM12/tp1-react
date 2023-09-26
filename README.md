# React + Vite

Para iniciar este proyecto se debe ejecutar el comando "npm run dev" en alguna terminal en el directorio principal del proyecto.

Luego que indicara que el mismo esta corriendo en el puerto 3000, (http://localhost:3000/)

Este proyecto consta de la pagina de login de mi Proyecto Integrador, el cual sera una plataforma para que las personas con poca experiencia laboral puedan conseguir un trabajo.

Posee 3 componentes, el header, footer y el main, en el cual se encuentra el cuerpo principal de la aplicación.

#EXPLICACION DEL FUNCIONAMIENTO:
Este código de React compuesto por 3 componentes crea un formulario de login con las siguientes características:

Dos campos de entrada: uno para el nombre de usuario o correo y otro para la contraseña.

Un botón para iniciar sesión.

Un botón para ocultar o mostrar la contraseña.

Una opción para recordar el nombre de usuario.

Un enlace para registrarse.

Un botón para iniciar sesión con Google.

Se utiliza el estado de React para controlar si la contraseña está oculta o no.

El botón para ocultar o mostrar la contraseña utiliza el ícono "bi bi-eye-slash" o "bi bi-eye" de Bootstrap Icons, según el estado de la contraseña. Esto se maneja como un dato booleano, ya que el input de la contraseña puede tener dos posibles valores, "text" o "password". Al presionar el boton el valor cambia, por lo que su estado difiere de su estado inicial, haciendo visible u ocultando la contraseña, ademas de tambien cambiar el icono.