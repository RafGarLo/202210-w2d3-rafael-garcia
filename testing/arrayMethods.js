// vamos a empezar con shift.. method removes the first element from an array and returns that removed element. This method changes the length of the array.
/*
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
*/
export function myShift(array) {
    const [removed, ...newArray] = array;
    const newError = 'Error: to use this function you can only enter an array';
    if (!Array.isArray(array)) {
        throw newError;
    }
    return removed;
}

export function myUnshift(array, element) {
    let newElement = element;
    let newArray = [newElement, ...array];
    let newArrayLength = newArray.length;
    const newError = 'Error: to use this function you can only enter an array';
    if (!Array.isArray(array)) {
        throw newError;
    }
    return newArrayLength;
}

export function myLength(array) {
    const errorThree =
        'Error: to use this function you can only enter an array';
    if (!Array.isArray(array)) {
        throw errorThree;
    }
    let count = 0;
    for (let i = 0; array[i] !== undefined; i++) {
        count++;
    }
    return count;
}

export function myIncludes(array, el) {
    for (let i = 0; i < array.length; i++) {
        if (el === array[i]) {
            return true;
        }
    }
    return false;
}
