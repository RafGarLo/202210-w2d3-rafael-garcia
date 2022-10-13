import { myShift } from './sample.js';

describe('testing myShift', () => {
    let array = [2, 3, 4, 5];
    let removedElement = [2];
    let secondArray = [3, 4, 5];
    test('if given array, function should remove first element, return it, and return modified array', () => {
        const result = myShift(array);
        expect(result).toStrictEqual(removedElement);
    });
});

import { myPush } from './sample.js';

describe('testing myPush', () => {
    let pet = 'cat';
    let animals = ['cow', 'dog'];
    let newArray = ['cat', 'cow', 'dog'];
    test('if given array and an element, it should add this element to the beginning of the array, and return the new array length', () => {
        const result = myPush(animals, pet);
        expect(result).toStrictEqual(newArray);
    });
});

/*export function sum(a, b) {
    return a + b;
}

import { sum } from '../testing/sample.js';

describe('testing add', () => {
    let a = 2;
    let b = 2;
    test('if a = 2 and if b = 2, it should be', () => {
        const result = sum(a, b);
        expect(result).toBe(4);
    });
});
*/
