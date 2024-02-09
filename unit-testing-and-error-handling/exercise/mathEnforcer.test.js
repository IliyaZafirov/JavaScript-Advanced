import { assert } from 'chai';
import { mathEnforcer } from './mathEnforcer.js';

describe('MathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined if the parameter is NOT a number!', () => {
            assert.isUndefined(mathEnforcer.addFive('1'), 'return must be undefined');
        })
        it('should return 10 if the parameter is 5!', () => {
            assert.equal(mathEnforcer.addFive(5), 10, 'return must be 10');
        })
        it('should return 0 if parameter is -5!', () => {
            assert.equal(mathEnforcer.addFive(-5), 0, 'return must be 0');
        })
        it('should return 15.5 if parameter is 10.5!', () => {
            assert.equal(mathEnforcer.addFive(10.5), 15.5, 'return must be 15.5');
        })
    });
    describe('subtractTen', () => {
        it('should return undefined if the parameter is NOT a number!', () => {
            assert.isUndefined(mathEnforcer.subtractTen('1'), 'return must be undefined');
        })
        it('should return 10 if the parameter is 5!', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0, 'return must be 0');
        })
        it('should return -20 if parameter is -10!', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20, 'return must be -20');
        })
        it('should return -20.5 if parameter is -10.5!', () => {
            assert.equal(mathEnforcer.subtractTen(-10.5), -20.5, 'return must be -20.5');
        })
    });
    describe('sum', () => {
        it('should return undefined if any of parameters is NOT a number!', () => {
            assert.isUndefined(mathEnforcer.sum('1', 2), 'return must be undefined');
            assert.isUndefined(mathEnforcer.sum(1, '2'), 'return must be undefined');

        })
        it('should return their sum if both parameters are numbers!', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2, 'return must be 2');
            assert.equal(mathEnforcer.sum(-1, -1), -2, 'return must be -2');
            assert.equal(mathEnforcer.sum(-1.5, -1.5), -3, 'return must be -3');

        })

    });

});
