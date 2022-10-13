import { strictEquals, division } from './equals.js';

//gerhkin - Given - When - Then

describe('Give strictEquals function', () => {
    let cases;
    beforeAll(() => {
        //Arrange
        const cases = [
            { a: 1, b: 1, r: true },
            { a: NaN, b: NaN, r: true },
            { a: 0, b: -0, r: true },
            { a: -0, b: 0, r: true },
            { a: 1, b: '1', r: false },
            { a: true, b: false, r: false },
            { a: false, b: false, r: true },
            { a: 'water', b: 'oil', r: false },
        ];
    });
    //beforeEach();
    /*cases.forEach((testCase) => {
        test(`When parameters are ${testCase.a} ${testCase.b}, then the result should be ${testCase.r}`, () => {
            //AAA Arrange - Act - Assert
            //AAA Arrange
            const result = strictEquals(testCase.a, testCase.b);
            //AAA Assert
            expect(result).toBe(testCase.r);
        });
    });*/
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
    test('When parameters are 0 & -0, then the result should be true', () => {
        //AAA Arrange - Act - Assert
        //AAA Arrange
        const a = 0;
        const b = -0;
        const expectedResult = true;
        //AAA Act
        const result = strictEquals(a, b);
        //AAA Assert
        expect(result).toBe(expectedResult);
    });
    test('When parameters are -0 & 0, then the result should be true', () => {
        //AAA Arrange - Act - Assert
        //AAA Arrange
        const a = -0;
        const b = 0;
        const expectedResult = true;
        //AAA Act
        const result = strictEquals(a, b);
        //AAA Assert
        expect(result).toBe(expectedResult);
    });
    test('When parameters are 1 & "1", then the result should be false', () => {
        //AAA Arrange - Act - Assert
        //AAA Arrange
        const a = 1;
        const b = '1';
        const expectedResult = false;
        //AAA Act
        const result = strictEquals(a, b);
        //AAA Assert
        expect(result).toBe(expectedResult);
    });
    test('When parameters are 1 & "1", then the result should be false', () => {
        //AAA Arrange - Act - Assert
        //AAA Arrange
        const a = 1;
        const b = '1';
        const expectedResult = false;
        //AAA Act
        const result = strictEquals(a, b);
        //AAA Assert
        expect(result).toBe(expectedResult);
    });
    test('When parameters are true & false, then the result should be false', () => {
        //AAA Arrange - Act - Assert
        //AAA Arrange
        const a = true;
        const b = false;
        const expectedResult = false;
        //AAA Act
        const result = strictEquals(a, b);
        //AAA Assert
        expect(result).toBe(expectedResult);
    });
    test('When parameters are false & false, then the result should be true', () => {
        //AAA Arrange - Act - Assert
        //AAA Arrange
        const a = false;
        const b = false;
        const expectedResult = true;
        //AAA Act
        const result = strictEquals(a, b);
        //AAA Assert
        expect(result).toBe(expectedResult);
    });
    test('When parameters are water & oil, then the result should be false', () => {
        //AAA Arrange - Act - Assert
        //AAA Arrange
        const a = 'water';
        const b = 'oil';
        const expectedResult = false;
        //AAA Act
        const result = strictEquals(a, b);
        //AAA Assert
        expect(result).toBe(expectedResult);
    });
});

describe('testing division', () => {
    test('given two numbers, the function should perform a division operation', () => {
        let a = 8;
        let b = 2;
        expect(division(a, b)).toBe(4);
    });
    test('given two numbers, if one of them is equal to 0, function should throw error', () => {
        let a = 8;
        let b = 0;
        let error0 = 'Error: invalid parameters entered';
        expect(() => {
            division(a, b);
        }).toThrow(error0);
    });
    test('given two numbers, if one of them is NaN, function should throw error', () => {
        let a = 8;
        let b = NaN;
        let error0 = 'Error: invalid parameters entered';
        try {
            division(a, b);
        } catch (e) {
            expect(e.message).toBe('Error: invalid parameters');
        }
    });
});
