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