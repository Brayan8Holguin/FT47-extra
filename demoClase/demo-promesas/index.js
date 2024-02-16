function getData() { 

    function successHandler(data) {
        console.log(data);
    }

    function errorHandler(err) {
        console.log(err);
    }

    fetch("https://jsonplaceholder.typicode.com/todos").then(successHandler, errorHandler);

    fetch("https://jsonplaceholder.typicode.com/todos").then(successHandler).catch(errorHandler);
}

const swap = true;

function cbPromise(resolve, reject) {
  setTimeout(() => {
    if (swap) {
      resolve("Estas bien");
    } else {
      reject("estas mal");
    }
  }, 1000);
}

const myPromise = new Promise(cbPromise);
console.log(myPromise);

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((data) => {
    console.log(data);
    console.log("hola");
  });