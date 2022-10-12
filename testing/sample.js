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
    console.log(removed);
    return newArray;
}

export function myPush(array, element) {
    let newElement = element;
    let newArray = [newElement, ...array];
    let newArrayLength = newArray.length;
    console.log(newArrayLength);
    return newArray;
}
/*
The push() method adds one or more elements to the end of an array and returns the new length of the array. 
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
*/
