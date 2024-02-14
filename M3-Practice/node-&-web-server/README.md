# Tarea de Node.js: Crear un Servidor HTTP con Consulta a JSONPlaceholder

## Descripción
El objetivo de esta tarea es crear un servidor HTTP utilizando Node.js que gestione diferentes rutas y consulte a la API JSONPlaceholder para obtener datos simulados.

## Tareas a realizar

1. **Crear un script de Node.js:**
   - Crea un archivo JavaScript llamado `server.js`.

2. **Crear un servidor HTTP:**
   - Utiliza el módulo `http` de Node.js para crear un servidor HTTP.
   - El servidor debe escuchar en el puerto `3000`.

3. **Gestionar diferentes rutas:**
   - Configura el servidor para que gestione al menos dos rutas diferentes:
     - `/usuarios`: Esta ruta debe devolver una lista de usuarios obtenida de la API JSONPlaceholder (https://jsonplaceholder.typicode.com/users).
     - `/posts`: Esta ruta debe devolver una lista de publicaciones obtenidas de la API JSONPlaceholder (https://jsonplaceholder.typicode.com/posts).

4. **Consultar JSONPlaceholder:**
   - Utiliza el módulo `https` de Node.js para realizar solicitudes a la API JSONPlaceholder.
   - Maneja las respuestas de la API y devuelve los datos correspondientes al cliente.

5. **Ejecutar el servidor:**
   - Ejecuta el script de Node.js para iniciar el servidor.
   - Abre un navegador web y navega a `http://localhost:3000/usuarios` y `http://localhost:3000/posts` para verificar que el servidor esté respondiendo correctamente con los datos de usuarios y publicaciones respectivamente.

6. **Documentación:**
   - Agrega comentarios en el código para explicar su funcionamiento y cualquier decisión de diseño importante.

## Entrega
- Sube tu código a un repositorio en GitHub o cualquier otro servicio de control de versiones.
- Asegúrate de que tu repositorio esté bien organizado y documentado.

## Puntos adicionales (opcional)
- Agrega manejo de errores y validaciones en tu servidor.
- Implementa otras rutas y funcionalidades adicionales que consideres útiles.
