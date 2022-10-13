import { myLength, myShift, myUnshift, myIncludes } from './arrayMethods.js';

describe('testing myShift', () => {
    let array = [2, 3, 4, 5];
    let removedElement = 2;
    let secondArray = [3, 4, 5];
    test('if given array, function should remove first element, return it, and return modified array', () => {
        const result = myShift(array);

        expect(result).toBe(removedElement);
        // expect(array).not.toContain(removedElement);
    });
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            myShift(notArray);
        }).toThrow();
    });
});

describe('testing myPush', () => {
    let pet = 'cat';
    let animals = ['cow', 'dog'];
    let newArray = ['cat', 'cow', 'dog'];
    let newArraylength = 3;
    test('if given array and an element, it should add this element to the beginning of the array, and return the new array length', () => {
        const result = myUnshift(animals, pet);
        expect(result).toStrictEqual(newArraylength);
    });
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray2 = 'pepe';
        expect(() => {
            myShift(notArray2);
        }).toThrow();
    });
});

describe('testing myLength', () => {
    let myArray = [1, 2, 3, 4];
    let myArrayLength = 4;
    test('given and array, function should return the length of said array', () => {
        const result = myLength(myArray);
        expect(result).toBe(4);
    });
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            myShift(notArray);
        }).toThrow();
    });
});

describe('testing myIncludes', () => {
    let myArray = [1, 2, 3, 4, 5];
    let elementNotIncluded = 6;
    let elementIncluded = 4;
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            myShift(notArray);
        }).toThrow();
    });
    test('Given an array and an element, function should find out whether this element is included in the array', () => {
        const resultIncluded = myIncludes(myArray, elementIncluded);
        expect(resultIncluded).toBe(true);
        const resultNotIncluded = myIncludes(myArray, elementNotIncluded);
        expect(resultNotIncluded).toBe(false);
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
