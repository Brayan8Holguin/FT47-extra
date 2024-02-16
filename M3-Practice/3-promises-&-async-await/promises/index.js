function obtenerNumeroAleatorio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.round(Math.random() * 10); // genera un número aleatorio entre 0 y 1
      console.log(numero);
      if (numero < 5) {
        resolve(numero);
      } else {
        reject("El número es mayor a 0.5");
      }
    }, 1000);
  });
}

console.log(obtenerNumeroAleatorio());

function successHandler(response) {
  console.log("Número obtenido: " + response);
}

function errorHandler(error) {
  console.log("Error: " + error);
}
// then(successHandler, errorHandler)
// catch -> then(null, errorHandler)
// catch(errorHandler)
obtenerNumeroAleatorio().then(successHandler).catch(errorHandler);

