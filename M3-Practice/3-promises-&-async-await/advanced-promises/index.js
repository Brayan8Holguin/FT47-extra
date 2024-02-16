// Función que simula obtener datos de una API
function obtenerDatosAPI() {
  /* return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = { nombre: "Juan", edad: 30 };
      resolve(datos); 
    }, 2000);
  }); */
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json() )
}

// Función que simula consultar una base de datos
function consultarBaseDeDatos() {
  return new Promise((resolve, reject) => {
    // Simulamos una tarea asíncrona
    setTimeout(() => {
      const resultados = ["registro1", "registro2", "registro3"];
      resolve(resultados); // Resolvemos la promesa con los datos consultados de la base de datos
    }, 1500);
  });
}

// Función que simula enviar una solicitud HTTP
function enviarSolicitudHTTP() {
  return new Promise((resolve, reject) => {
    // Simulamos una tarea asíncrona
    setTimeout(() => {
      const respuesta = "Solicitud HTTP enviada correctamente";
      resolve(respuesta); // Resolvemos la promesa con la respuesta de la solicitud HTTP
    }, 3000);
  });
}

// Encadenar promesas
obtenerDatosAPI()
  .then((datos) => {
    console.log("Datos obtenidos de la API:", datos);
    return consultarBaseDeDatos(); // Devolvemos la promesa de consultar la base de datos
  })
  .then((resultados) => {
    console.log("Resultados de la base de datos:", resultados);
    return enviarSolicitudHTTP(); // Devolvemos la promesa de enviar la solicitud HTTP
  })
  .then((respuesta) => {
    console.log("Respuesta de la solicitud HTTP:", respuesta);
  })
  .catch((error) => {
    console.error("Error:", error); // Manejamos cualquier error que ocurra en alguna de las promesas
  });

// creemos una funcion para hacer una solicitud real HTTP
  
