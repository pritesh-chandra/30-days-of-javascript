/*
    Write a function createHelloWorld. It should return a new function that always returns "Hello World".
*/

const createHelloWorld = () => { // created a function createHelloWorld
    return function(...args) { // return a new function with args parameter
        return "Hello World"; // return "Hello World"
    }
};

module.exports = createHelloWorld; // export the function createHelloWorld