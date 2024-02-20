const URL = "https://jsonplaceholder.typicode.com";

//? con async/await
//* un async await solito
/* async function getDataFetch() { 
  try {
    const response = await fetch(`${URL}/posts/333`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(Object.keys(data));
    if (Object.keys(data).length === 0) throw new Error("data is empty");
    return  data; //devuelve el dato que se recibio de la peticion
  } catch (error) {
    console.log(error)
    return error
  }
}

const post = await getDataFetch()
console.log(post) */


//? con promesas
//* una promesa solita
/* function getDataFetch() { 
  return fetch(`${URL}/posts/33`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      console.log(Object.keys(data));
      if (Object.keys(data).length === 0) throw new Error("data is empty");
      return data
    })
    .catch((error) => (error));
}

getDataFetch().then(res => {
  console.log(res)
}) */

//? con async await
//* async  y await en conjunto para manejar varias promesas

/* function getData() { 
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${URL}/posts/33`);
      console.log(response);
      const data = await response.json();
      console.log(data);
      console.log(Object.keys(data));
      if (Object.keys(data).length !== 0) resolve(data);
      else reject("data is empty");
    } catch (error) {
      console.log(error)
    }
  })
}
getData().then(res => {
  console.log(res)
}) */

//? con promesas
//* promesa envolviendo otra promesa
/* function getData() { 
  return new Promise((resolve, reject) => {
    fetch(`${URL}/posts/300`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log(Object.keys(data))
        if(Object.keys(data).length === 0) reject("data is empty")
      })
      .catch(error => reject(error));
  })
}

getData().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
}) */

//?


/* function getApiData(path, id) {
  return new Promise((resolve, reject) => {
    const url = `${URL}/${path}/${id}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (Object.keys(data).length > 0) {
          resolve(data);
        } else {
          resolve({ id, message: "No se encontraron datos" });
        }
      })
      .catch((err) => {
        resolve(null);
      });
  });
} */
/* let users = []
getApiData("users", 1)
  .then((user) => {
    users.push(user);
    return getApiData("users", 2);
  })
  .then((user) => {
    users.push(user);
    return getApiData("users", 3);
  })
  .then((user) => {
    users.push(user);
    return getApiData("users", 4);
  })
  .then((user) => {
    users.push(user);
    return getApiData("users", 5);
  })
  .then((user) => {
    users.push(user);
    return getApiData("users", 6);
  })
  .then((user) => {
    users.push(user);
    return getApiData("users", 7);
  })
  .then((user) => {
    users.push(user);
    return getApiData("users", 8);
  })
  .then((user) => {
    users.push(user);
    return getApiData("users", 9);
  })
  .then((user) => {
    users.push(user);
    return getApiData("users", 10);
  })
  .then((user) => {
    users.push(user);
    return getApiData("users", 11);
  })
  .then((user) => {
    users.push(user);
    return getApiData("users", 3);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(users) */

//? Promise all
/* let users = [];
let arr = [];
let errors = [];
for (let i = 1; i <= 20; i++) {
  arr.push(getApiData("users", i));
}
Promise.all(arr)
  .then((users) => {
    console.log(users);
    users.forEach((user) => {
      console.log(user);
      if (user.message) {
        console.log(user.message);
        errors.push(user.id);
      }
    });
    console.log(errors);
    return { users, errors };
  })
  .then(({ users, errors }) => {
    console.log(errors);
    users.forEach((user) => {
      errors.forEach((error) => {
        if (user.id === error) {
          const userIndex = users.indexOf(user);
          const userDefault = {
            id: user.id,
            message: "No se encontraron datos",
            name: "No se encontraron datos",
            email: "No se encontraron datos",
          };
          users[userIndex] = userDefault;
        }
      });
    });
    console.log(users);
  })
  .catch((err) => {
    console.log(err);
  });
 */
