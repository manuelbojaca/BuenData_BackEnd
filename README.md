# BuenData_BackEnd

Para iniciar con el despliegue de la aplicación, clone este repositorio en su máquina local e inmediatamente después ejecute en la consola de comandos donde esta guardado el proyecto el comando: npm install

Esto instalará automáticamente todas las dependencias necesarias para ejecutar la API, una vez hecho esto podrá ejecutar la API mediante el comando: npm run start

Cuando la API ya esté desplegada podrá hacer uso de todas sus funcionalidades, las cuales son 
• Crear un nuevo ingreso con un nombre, un ID único y una fecha.
• Mostrar un ingreso individual mediante la provisión de un ID.
• Mostrar todos los ingresos en la base de datos.
• Borrar un ingreso mediante la provisión de un ID.
• Actualizar el nombre o fecha de un ingreso.

##Crear un nuevo ingreso

Para crear un ingreso nuevo deberá proveer al end point el nombre del usuario y su cumpleaños, en el cuerpo de la petición http con el método POST en formato JSON, por ejemplo:

{ “name”: “Shakira”, "birthday": "17/02/1987" }

A la URL http://localhost:8080/api/users. Esto creará una nueva lista vacía con un único ID ligada al usuario.

##Mostrar un único ingreso por ID

Para mostrar una única lista deberá tener presente el ID único del ingreso, que será devuelto al crearlo junto con la estructura del ingreso en formato JSON. Este ID deberá ser agregado como parámetro a la petición http con método GET al final de la URL http://localhost:8080/api/users/.

##Mostrar todas las listas

Para mostrar todos los Ingresos presentes en la base de datos, deberá hacer una petición http con método GET a la URL http://localhost:8080/api/users.

##Borrar un ingreso

Para borrar un unico ingreso deberá tener presente el ID único de ese ingreso, que será devuelto al crearla junto con la estructura de la lista en formato JSON. Este ID deberá ser agregado como parámetro a la petición http con método DELETE al final de la URL http://localhost:8080/api/users/:userid.

##Actualizar un ingreso

Para actualizar o modificar un ingreso deberá proveer al end point el nombre del ingreso, en el cuerpo de la petición http con el método PATCH en formato JSON, por ejemplo:

{ “name”: “Shakira”, "birthday": 17/02/1987 }

A la URL http://localhost:8080/api/users/:userid. Esto creará una nueva lista vacía con un único ID ligada al usuario.
