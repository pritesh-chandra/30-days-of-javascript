/*
    Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

const createCounter = (n) => { // created a function createCounter with n parameter
    let count = n; // created a variable count and assigned n to it
    return function() { // return a new function
        return count++; // return count and increment it by 1
    }
}

module.exports = createCounter;