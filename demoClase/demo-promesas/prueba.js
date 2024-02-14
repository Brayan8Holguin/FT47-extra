let swap = false;

function miFuncionCb(resolve, reject) { 
    setTimeout(() => {
        if (swap) {
            resolve('Todo bien')
        } else {
            reject('Todo mal')
        }
    }, 1000);
}

/* function successHandler(data) {
    console.log("te resolviste")
  console.log(data);
}

function errorHandler(err) {
    console.log("te rechazaste")
  console.log(err);
} */

const myPromise = new Promise(miFuncionCb);
console.log(myPromise);
myPromise
    .then((data) => {
        console.log("te resolviste")
        console.log(data)
        return "Hola"
    }).then(data => {
        console.log("te resolviste 2")
        console.log(data)
        throw new Error("Error")
        return "chau"
    }).then(data => {
        console.log("te resolviste 3")
        console.log(data)
    }).catch((err) => {
        console.log("te rechazaste")
        console.log(err)
    })