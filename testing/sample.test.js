import { myShift } from './sample.js';

describe('testing myShift', () => {
    let array = [2, 3, 4, 5];
    let secondArray = [3, 4, 5];
    test('if array has 4 elements, and 2 is element number 0, it should be', () => {
        const result = myShift(array);
        expect(result).toBe(secondArray);
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
