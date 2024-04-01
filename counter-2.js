/*
    Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

    The three functions are:

    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.
*/

const createCounter2 = (init) => {
    let count = init;
    return {
        increment: () => {
            count++;
            return count;
        },
        reset: () => {
            count = init;
            return count;
        },
        decrement: () => {
            count--;
            return count;
        }
    }
};

module.exports = createCounter2;