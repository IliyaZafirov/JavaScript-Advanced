// Add / Subtract
// Write tests to check the functionality of the following code:
// addSubtract.js
// function createCalculator() {
//     let value = 0;
//     return {
//         add: function(num) { value += Number(num); },
//         subtract: function(num) { value -= Number(num); },
//         get: function() { return value; }
//     }
// }
// Your tests will be supplied with a function named 'createCalculator()'. It should meet the following requirements:
// Return a module (object), containing the functions add(), subtract() and get() as properties
// Keep an internal sum that can’t be modified from the outside
// The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
// The function get() returns the value of the internal sum

import { assert, expect } from "chai";
import { createCalculator } from "./calc.js";

describe(`testing calculator functionality`, () => {
    it(`returns an object`, () => {
        expect(typeof createCalculator()).to.equals('object');
    });
    it(`return obj has method subtract`, () => {
        expect(typeof createCalculator().subtract).to.equals('function');
    });
    it(`return obj has method get`, () => {
        expect(typeof createCalculator().get).to.equals('function');
    });
    it(`internal sum cannot be modified`, () => {
        expect(createCalculator().value).to.equals(undefined);
    });
    it(`add method adds parsable input`, () => {
        const calc = createCalculator();
        calc.add('1');
        expect(calc.get()).to.equals(1);
    });
    it(`subtract method subtracts parsable input`, () => {
        const calc = createCalculator();
        calc.add('2');
        calc.subtract('1');
        expect(calc.get()).to.equals(1);
    });
})

