import { strictEquals } from './functionstotest.js';

//gerhkin - Given - When - Then

describe('Give strictEquals function', () => {
    test('When parameters are 1 & 1, then the result should be true', () => {
        //AAA Arrange - Act - Assert
        //AAA Arrange
        const a = 1;
        const b = 1;
        const expectedResult = true;
        //AAA Act
        const result = strictEquals(a, b);
        //AAA Assert
        expect(result).toBe(expectedResult);
    });
    test('When parameters are NaN & NaN, then the result should be false', () => {
        //AAA Arrange - Act - Assert
        //AAA Arrange
        const a = NaN;
        const b = NaN;
        const expectedResult = false;
        //AAA Act
        const result = strictEquals(a, b);
        //AAA Assert
        expect(result).toBe(expectedResult);
    });
});
