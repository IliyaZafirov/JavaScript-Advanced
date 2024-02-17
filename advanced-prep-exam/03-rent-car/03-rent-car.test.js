// Your Task
// Using Mocha and Chai write JS Unit Tests to test a variable named rentCar, which represents an object. You may use the following code as a template:
// describe("Tests …", function() {
//     describe("TODO …", function() {
//         it("TODO …", function() {
//             // TODO: …
//         });
//      });
//      // TODO: …
// });

// The object should have the following functionality: 
// searchCar(shop, model) - A function that accepts two parameters (one array and one string):
// The function checks whether the submitted string model is present in the shop (example: ["Volkswagen", "BMW", "Audi"]), and returns the number of matching elements and the model of the car in the message: `There is ${findModel.length} car of model ${model} in the catalog!`;
// There is a need for validation of the input, a shop and a model may not always be valid. In case of submitted invalid parameters, throw an error "Invalid input!";
// If there are no matching elements, the function throws an error: 'There are no such models in the catalog!'
// calculatePriceOfCar(model, days) - A function that accepts two parameters (string and number):
// There is a need for validation of the input, a model, and days may not always be valid. In case of submitted invalid parameters, throw an error "Invalid input!";
// The function returns the model and the price it will cost for renting a car for the given days: `You choose ${model} and it will cost $${cost}!`;
// Otherwise, if there is no such model, the function throws an error: 'No such model in the catalog!'.
// checkBudget(costPerDay, days, budget) - A function that accepts three parameters (numbers):
// There is a need for validation of the input, a costPerDay, days, and a budget may not always be valid. In case of submitted invalid parameters, throw an error "Invalid input!";
// If the budget is bigger or equal to the cost, the function returns: `You rent a car!`;
// If the budget is less than the cost, the function returns the message: 'You need a bigger budget!'.

import { rentCar } from './03-rent-car.js';
import { expect } from 'chai';

describe('rentCar Obj Functionality', () => {
    describe('searchCar(shop, model)', () => {
        it('should return There is 1 car of model Audi in the catalog!', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal(`There is 1 car of model Audi in the catalog!`);
        })

        it('should return There is 2 car of model Audi in the catalog!', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"], 'Audi')).to.equal(`There is 2 car of model Audi in the catalog!`);
        })

        it('should throw  There are no such models in the catalog!', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"], 'Skoda')).to.throw(`There are no such models in the catalog!`);
        })

        it('should throw Error Test 1', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"], 1)).to.throw(`Invalid input!`);
        })

        it('should throw Error Test 2', () => {
            expect(() => rentCar.searchCar('string', 'Audi')).to.throw(`Invalid input!`);
        })
    })

    describe('calculatePriceOfCar(model, days)', () => {

        it('should throw Error Test 1', () => {
            expect(() => rentCar.calculatePriceOfCar("Audi", '1')).to.throw(`Invalid input!`);
        })

        it('should throw Error Test 2', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 'Audi')).to.throw(`Invalid input!`);
        })

        it('should throw Error Test 3', () => {
            expect(() => rentCar.calculatePriceOfCar('Skoda', 5)).to.throw(`No such model in the catalog!`);
        })

        it('should return ou choose Volkswagen and it will cost $160000!', () => {
            expect(rentCar.calculatePriceOfCar("Volkswagen", 8000)).to.equal(`You choose Volkswagen and it will cost $160000!`);
        })

        it('should return You choose Audi and it will cost $450000!', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 12500)).to.equal(`You choose Audi and it will cost $450000!`);
        })
    })

    describe('checkBudget(costPerDay, days, budget)', () => {
        it('should throw Error Test 1', () => {
            expect(() => rentCar.checkBudget('1', 2, 3)).to.throw('Invalid input!');
        })

        it('should throw Error Test 2', () => {
            expect(() => rentCar.checkBudget(1, '2', 3)).to.throw('Invalid input!');
        })

        it('should throw Error Test 3', () => {
            expect(() => rentCar.checkBudget(1, 2, '3')).to.throw('Invalid input!');
        })

        it('should return You rent a car! Test 1', () => {
            expect(rentCar.checkBudget(10, 1, 10)).to.equal('You rent a car!');
        })

        it('should return You rent a car! Test 2', () => {
            expect(rentCar.checkBudget(5, 1, 10)).to.equal('You rent a car!');
        })

        it('should return You need a bigger budget! Test 1', () => {
            expect(rentCar.checkBudget(15, 1, 10)).to.equal('You need a bigger budget!');
        })

        it('should return You need a bigger budget! Test 2', () => {
            expect(rentCar.checkBudget(6, 2, 10)).to.equal('You need a bigger budget!');
        })
        
    })
})