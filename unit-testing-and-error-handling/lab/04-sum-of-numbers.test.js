// Unit Testing
// You are required to submit only the unit tests for the object/function you are testing. 
// Sum of Numbers
// Write tests to check the functionality of the following code:
// sumNumbers.js
// function sum(arr) {
//     let sum = 0;
//     for (let num of arr){
//         sum += Number(num);
//     }
//     return sum;
// }
// Your tests will be supplied with a function named 'sum()'. It should meet the following requirements:
// Take an array of numbers as an argument
// Return the sum of the values of all elements inside the array

import { expect } from 'chai';
import { sum } from './sum.js';

describe('Suite', () => {
    it('works with number array', () => {
        const arr = [1, 1, 1];

        expect(sum(arr)).to.equal(3);
    });

    it('throws error for non-array params', () => {
        expect(() => sum(1)).to.throw();
    })

    it('returns 0 from empty array', () => {
        expect(sum([])).to.equal(0);
    });

    it('returns 1 from empty array', () => {
        expect(sum([1])).to.equal(1);
    });
})