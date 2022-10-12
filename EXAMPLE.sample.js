export function sum(a, b) {
    return a + b;
}

import { sum } from './testing/sample.js';

describe('testing add', () => {
    let a = 2;
    let b = 2;
    test('if a = 2 and if b = 2, it should be', () => {
        const result = sum(a, b);
        expect(result).toBe(4);
    });
});
