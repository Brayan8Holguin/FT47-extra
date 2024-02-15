// Función que devuelve una promesa para obtener un número aleatorio entre 1 y 10
function obtenerNumeroAleatorio() {
  return new Promise((resolve, reject) => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
    if (numeroAleatorio) {
      resolve(numeroAleatorio); // Resuelve la promesa con el número aleatorio
    } else {
      reject("Error al generar el número aleatorio"); // Rechaza la promesa con un mensaje de error
    }
  });
}

// Consumir la promesa para obtener el número aleatorio
obtenerNumeroAleatorio()
  .then((numero) => {
    console.log("Número aleatorio:", numero); // Muestra el número aleatorio en la consola si la promesa se resuelve correctamente
  })
  .catch((error) => {
    console.error("Error:", error); // Muestra el mensaje de error si la promesa es rechazada
  });
