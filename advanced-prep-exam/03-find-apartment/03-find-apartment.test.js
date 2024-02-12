// Your Task
// Using Mocha and Chai write JS Unit Tests to test a variable named findNewApartment, which represents an object. 
// The object that should have the following functionality: 

// isGoodLocation (city, nearPublicTransportation) - A function that accepts two parameters: string and boolean.
// If the value of the string city is different than a "Sofia", "Plovdiv" or "Varna" 
// return :
// "This location is not suitable for you."
// If the value of the boolean nearPublicTransportation is false
// return :
// "There is no public transport in area."
// Otherwise, if the above conditions are not met, return the following message:
// "You can go on home tour!" 
// You need to validate the input, if the city and nearPublicTransportation are not a string and boolean, throw an error: "Invalid input!".
// isLargeEnough (apartments, minimalSquareMeters) - A function that accepts an array and number.
// The apartments array will store the area of the apartment in square meters ([40, 50, 60…])
// You must add the area of apartment in resultArr if is equal or bigger than minimalSquareMeters.
// Finally, return the changed array of apartments.
// There is a need for validation for the input, an array and number may not always be valid. In case of submitted invalid parameters, throw an error "Invalid input!":
// If passed apartments parameter is not an array.
// If apartments is empty array.
// If the minimalSquareMeters is not a number.


// isItAffordable (price, budget) - A function that accepts two parameters: number and number.
// You need to calculate if you can afford buying the apartment by subtracting the price of the apartment from your budget.
// If the result is lower than 0, return: 
// "You don't have enough money for this house!"
// Otherwise, if the above conditions are not met, return the following message:
// "You can afford this home!"
// You need to validate the input, if the price and budget are not a number and price and budget are less or equal to 0, throw an error: "Invalid input!".


import { findNewApartment } from './03-find-apartment.js';
import { expect } from 'chai';

describe('findNewApartment Object Functionality Testing', () => {

    describe('isGoodLocation (city, nearPublicTransportation)', () => {
        it('should return This location is not suitable for you.', () => {
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.')
        })
        it('should return This location is not suitable for you.', () => {
            expect(findNewApartment.isGoodLocation('Pleven', false)).to.equal('This location is not suitable for you.')
        })

        it('should return There is no public transport in area.', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.')
        })

        it('should return There is no public transport in area.', () => {
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.')
        })

        it('should return You can go on home tour! ', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!')
        })

        it('should return You can go on home tour! ', () => {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!')
        })

        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation(['Varna', 'Sofia'], true)).to.throw('Invalid input!')
        })

        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw('Invalid input!')
        })

        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isGoodLocation('Sofia', 123)).to.throw('Invalid input!')
        })
    })

    describe('isLargeEnough (apartments, minimalSquareMeters)', () => {
        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], '60')).to.throw('Invalid input!')
        })

        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isLargeEnough([], '60')).to.throw('Invalid input!')
        })

        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isLargeEnough(60, 60)).to.throw('Invalid input!')
        })

        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isLargeEnough('string', 60)).to.throw('Invalid input!')
        })

        it('should return 60', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal('60')
        })

        it('should return 40, 50, 60', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 40)).to.equal('40, 50, 60')
        })
    })

    describe('isItAffordable (price, budget) ', () => {
        it(`should return You don't have enough money for this house!`, () => {
            expect(findNewApartment.isItAffordable(25000, 2000)).to.equal(`You don't have enough money for this house!`)
        })

        it(`should return You can afford this home!`, () => {
            expect(findNewApartment.isItAffordable(20000, 25000)).to.equal(`You can afford this home!`)
        })

        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isItAffordable('1', 1)).to.throw('Invalid input!')
        })

        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isItAffordable(1, '1')).to.throw('Invalid input!')
        })

        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isItAffordable(5, -1)).to.throw('Invalid input!')
        })

        it('should throw Invalid input!', () => {
            expect(() => findNewApartment.isItAffordable(-1, 5)).to.throw('Invalid input!')
        })
    })

})