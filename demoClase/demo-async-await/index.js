let swap = true;

function miFuncionCb(resolve, reject) {
  setTimeout(() => {
    if (swap) {
      resolve("Todo bien");
    } else {
      reject("Todo mal");
    }
  }, 1000);
}

function myFunctionPromise() {
  return new Promise(miFuncionCb);
}

//? Ejemplo 1:
//* Promesas
/* 
const myPromise = myFunctionPromise()
myPromise.then(data => {
    console.log(data)
}) 
console.log(myPromise);
*/
//* async await
/* async function asyncFunction() { 
    const myPromise = await myFunctionPromise();
    console.log(myPromise)
    return myPromise
}

console.log(asyncFunction()) */

//? Ejemplo 2
//* Con promesas
const myPromise = myFunctionPromise();
myPromise
  .then((data) => {
    console.log("te resolviste");
    console.log(data);
    return "Hola";
  })
  .then((data) => {
    console.log("te resolviste 2");
    console.log(data);
    throw new Error("Error");
    return "chau";
  })
  .then((data) => {
    console.log("te resolviste 3");
    console.log(data);
  })
  .catch((err) => {
    console.log("te rechazaste");
    console.log(err);
  });

//* Con async await
async function myAsyncFunction() {
  const myPromise = await myFunctionPromise();
  console.log(myPromise);
  return "Hola";
}

console.log(myAsyncFunction());

//? Ejemplo 3
//* Con promesas
fetch("https://jsonplaceholder.typicode.com/users/13")
  .then((res) => res.json())
  .then((data) => {
    /* const obj = { name: "Feli" };
    obj.map((el) => console.log(el)); */
    throw new Error("Error");
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Se terminó la promesa");
  });

//* Con async await
async function getApiData() {
  try {
    /* const obj = { name: "Feli" };
    obj.map((el) => console.log(el)); */
    throw new Error("Error");
    const info = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await info.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Se terminó la promesa");
  }
}
getApiData();
