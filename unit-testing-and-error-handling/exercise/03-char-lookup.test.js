// ⦁	Char Lookup
// Write unit tests for a function that retrieves a character at a given index from a passed-in string.
// You are given a function named lookupChar(), which has the following functionality:
// ⦁	lookupChar(string, index) - accepts a string and an integer (the index of the char we want to lookup) :
// ⦁	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
// ⦁	If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
// ⦁	If both parameters have correct types and values - return the character at the specified index in the string.
// JS Code
// You are provided with an implementation of the lookupChar() function:
// charLookUp.js
// function lookupChar(string, index) {
//     if (typeof(string) !== 'string' || !Number.isInteger(index)) {
//         return undefined;
//     }
//     if (string.length <= index || index < 0) {
//         return "Incorrect index";
//     }

//     return string.charAt(index);
// }
// Hints
// А good first step in testing a method is usually to determine all exit conditions. Reading through the specification or taking a look at the implementation we can easily determine 3 main exit conditions:
// ⦁	Returning undefined
// ⦁	Returning an "Incorrect index"
// ⦁	Returning the char at the specified index
// Now that we have our exit conditions we should start checking in what situations we can reach them. If any of the parameters are of incorrect type, undefined should be returned. 
// If we take a closer look at the implementation, we see that the check uses Number.isInteger() instead of typeof(index === number) to check the index. While typeof would protect us from getting past an index that is a non-number, it won’t protect us from being passed a floating-point number. The specification says that the index needs to be an integer, since floating-point numbers won’t work as indexes.
// Moving on to the next exit condition - returning an "Incorrect index" if we get past an index that is a negative number or an index that is outside of the bounds of the string.
// For the last exit condition - returning a correct result. A simple check for the returned value will be enough.
// With these last two tests, we have covered the lookupChar() function.

import { lookupChar } from './03-char-lookup.js';
import { expect } from 'chai';

describe('lookupChar(string, index', () => {
    it('should return undefined if the first parameter is NOT a string!', () => {
        expect(lookupChar(123, 1)).to.equal(undefined);
    });

    it('should return undefined if the first parameter is NOT a string!', () => {
        expect(lookupChar(false, 1)).to.equal(undefined);
    });

    it('should return undefined if the first parameter is NOT a string!', () => {
        expect(lookupChar(123, 5.34)).to.equal(undefined);
    });

    it('should return undefined if the first parameter is NOT a string!', () => {
        expect(lookupChar('123', '1')).to.equal(undefined);
    });

    it('should return Incorrect index if both parameters are of the correct value type of index is incorrect !', () => {
        expect(lookupChar('string', false)).to.equal(undefined);
    });

    it('should return Incorrect index if both parameters are of the correct value type of index is incorrect !', () => {
        expect(lookupChar('string', 5.43)).to.equal(undefined);
    });

    it('should return Incorrect index if both parameters are of the correct value type of index is incorrect !', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
    });

    it('should return Incorrect index if both parameters are of the correct value type of index is incorrect !', () => {
        expect(lookupChar('string', 15)).to.equal('Incorrect index');
    });

    it('should return return the character at the specified index in the string if both paramaters have correct types and values !', () => {
        expect(lookupChar('string', 0)).to.equal('s');
    });

    it('should return return the character at the specified index in the string if both paramaters have correct types and values !', () => {
        expect(lookupChar('string', 1)).to.equal('t');
    });

    it('should return return the character at the specified index in the string if both paramaters have correct types and values !', () => {
        expect(lookupChar('string', 2)).to.equal('r');
    });

});