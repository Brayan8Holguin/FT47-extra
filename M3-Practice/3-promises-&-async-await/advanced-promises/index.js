function obtenerDatosAPI(swap = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (swap) {
        const datos = { name: "Feli", country: "Colombia" };
        resolve(`Estos son los datos de la API: `, datos);
      } else {
        reject("Error del servidor 500");
      }
    }, 2000);
  });
}

function consultarDatosDB(swap = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (swap) {
        const products = [
          { name: "Teclado", color: "white" },
          { name: "Mouse", color: "white" },
        ];
        resolve(`Estos son los datos de la DB: `, products);
      } else {
        reject("No se encontraron datos");
      }
    }, 1500);
  });
}

function enviarSolicitudHTTP(swap = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // enviamos la solicitud
      if (swap) {
        resolve("Solicitud enviada correctamente");
      } else {
        reject("Solicitud denegada");
      }
    }, 3000);
  });
}

obtenerDatosAPI()
  .then((res) => {
    console.log(res);
    return consultarDatosDB(false);
  })
  .then((data) => {
    console.log(data);
    return enviarSolicitudHTTP();
  })
  .then((result) => {
    console.log(result);
  }).catch(err => {
      console.log(err)
  })

//Promise All

Promise.all([obtenerDatosAPI(), consultarDatosDB(), enviarSolicitudHTTP()])
    .then(res => {
    console.log(res)
    }).catch(err => {
    console.log(err)
})

// Promise Race

Promise.race([obtenerDatosAPI(), consultarDatosDB(false), enviarSolicitudHTTP()]).then(res => {
    console.log(res)
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

