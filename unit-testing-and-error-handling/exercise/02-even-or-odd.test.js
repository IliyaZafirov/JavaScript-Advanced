// ⦁	Even or Odd
// You need to write unit tests for a function isOddOrEven() that checks whether the length of a passed string is even or odd.
// If the passed parameter is NOT a string return undefined. If the parameter is a string return either "even" or "odd" based on the length of the string.
// JS Code
// You are provided with an implementation of the isOddOrEven() function:
// isOddOrEven.js
// function isOddOrEven(string) {
//     if (typeof(string) !== 'string') {
//         return undefined;
//     }
//     if (string.length % 2 === 0) {
//         return "even";
//     }

//     return "odd";
// }
// Hints
// We can see there are three outcomes for the function:
// ⦁	Returning undefined
// ⦁	Returning "even"
// ⦁	Returning "odd"
// Write one or two tests passing parameters that are NOT of type string to the function and expecting it to return undefined.
// After we have checked the validation it's time to check whether the function works correctly with valid arguments. Write a test for each of the cases:
// ⦁	One where we pass a string with even length;
// ⦁	And one where we pass a string with an odd length;
// Finally, make an extra test passing multiple different strings in a row to ensure the function works correctly.

import { isOddOrEven } from './02-even-or-odd.js';
import { expect } from 'chai';

describe('isOddOrEven(string)', () => {
    it('should return undefined', () => {
        expect(isOddOrEven(123)).to.equal(undefined)
    })

    it('should return undefined', () => {
        expect(isOddOrEven([123])).to.equal(undefined)
    })

    it('should return odd', () => {
        expect(isOddOrEven('123')).to.equal('odd')
    })

    it('should return even', () => {
        expect(isOddOrEven('1234')).to.equal('even')
    })

    it('should return even', () => {
        expect(isOddOrEven('12345')).to.equal('odd')
    })

    it('should return even', () => {
        expect(isOddOrEven('123467')).to.equal('even')
    })
})