const URL = "https://jsonplaceholder.typicode.com";
function getApiData(path, id) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}/${path}/${id}`)
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
}
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
let users = [];
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
