// JS Advanced Exam
// Problem 3. Unit Testing
// Your Task
// Using Mocha and Chai write JS Unit Tests to test a variable named MotorcycleRider, which represents an object. You may use the following code as a template:
// describe("Tests …", function() {
//     describe("TODO …", function() {
//         it("TODO …", function() {
//             // TODO: …
//         });
//      });
//      // TODO: …
// });
// The object that should have the following functionality:				
// licenseRestriction (category) - A function that accepts one parameter: string.
// If the category is "AM" return the string:
// "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
// If the category is "A1" return the string:
// "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
// If the category is "A2" return the string:
// "Motorcycles with maximum power of 35KW. and the minimum age is 18."
// If the category is "A" return the string:
// "No motorcycle restrictions, and the minimum age is 24."
// If the value of the string type is different from "AM,A1,A2,A", throw an error:
//  " Invalid Information!"
// motorcycleShowroom (engineVolume, maximumEngineVolume) - A function that accepts an array and number. The engineVolume array will store the engine volume of a motorcycles in cubic centimeters (["125", "250", "600"…]), you need to check every element in the array and if its less or equal to maximumEngineVolume.
// You must add an element (engineVolume) if maximumEngineVolume is less or equal to engineVolume from the array in to new availableBikes array.
// Finally, return the array length in following string:
// "There are ${availableBikes.length} available motorcycles matching your criteria!"
// There is a need for validation for the input, an array and number may not always be valid. In case of submitted invalid parameters, throw an error "Invalid Information!":
// If passed engineVolume or maximumEngineVolume parameter are not an array and number.
// If the engineVolume is an empty array, and if maximumEngineVolume is less than 50.
// otherSpendings (equipment, consumables, discount) - A function that accepts three parameters: array, array and boolean.
// Calculate the total price you are going to pay depending on the purchased equipment and consumables:
// The result must be formatted to the second digit after the decimal point.
// The bike shop offers two options for equipment and consumables:
// The two options for equipment are:
// helmet, which costs $200
// jacked, which costs $300
// The two options for consumables are:
// engine oil, which costs $70
// oil filter, which costs $30
// If the discount is true, 10% discount should be applied. Then return the following message:
// "You spend $${totalPrice} for equipment and consumables with 10% discount!"
// Else, return the following message:  
// "You spend $${totalPrice} for equipment and consumables!"
// You need to validate the input, if the equipment, consumables and discount are not a array, array and boolean an error: "Invalid information!"
// JS Code
// To ease you in the process, you are provided with an implementation that meets all of the specification requirements for the MotorcycleRider object:
// chooseYourCar.js
// const motorcycleRider = {
//   licenseRestriction(category) {
//     if (category === "AM") {
//       return 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
//     } else if (category === "A1") {
//       return 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
//     } else if (category === "A2") {
//       return 'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
//     } else if (category === "A") {
//       return 'No motorcycle restrictions, and the minimum age is 24.'
//     } else {
//       throw new Error("Invalid Information!");
//     }
//   },
//   motorcycleShowroom(engineVolume, maximumEngineVolume) {
//     if (!Array.isArray(engineVolume) || typeof maximumEngineVolume !== "number" || engineVolume.length < 1 || maximumEngineVolume < 50) {
//       throw new Error("Invalid Information!");
//     }
//     let availableBikes = [];
//     engineVolume.forEach((engine) => {
//       if (engine <= maximumEngineVolume && engine >= 50) {
//         availableBikes.push(engine);
//       }
//     });
//     return `There are ${availableBikes.length} available motorcycles matching your criteria!`;
//   },
//   otherSpendings(equipment, consumables, discount) {
//     if (
//       !Array.isArray(equipment) ||
//       !Array.isArray(consumables) ||
//       typeof discount !== "boolean"
//     ) {
//       throw new Error("Invalid Information!");
//     }
//     let totalPrice = 0;
//     equipment.forEach((element) => {
//       if (element === "helmet") {
//         totalPrice += 200
//       } else if (element === "jacked") {
//         totalPrice += 300
//       }
//     });
//     consumables.forEach((element) => {
//       if (element === "engine oil") {
//         totalPrice += 70
//       } else if (element === "oil filter") {
//         totalPrice += 30
//       }
//     });
//     if (discount) {
//       totalPrice = totalPrice * 0.9;
//       return `You spend $${totalPrice.toFixed(2)} for equipment and consumables with 10% discount!`
//     } else {
//       return `You spend $${totalPrice.toFixed(2)} for equipment and consumables!`
//     }
//   }
// };
//     }
// }
// Submission
// Submit your tests inside a describe() statement, as shown above.

import { motorcycleRider } from './motorcycle-rider.js'
import { expect } from 'chai';


describe('Testing functionality', () => {

    describe('licenseRestriction(category)', () => {
        it('should test licenseRestriction(AM)', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });
        it('should test licenseRestriction(A1)', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });
        it('should test licenseRestriction(A2)', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });
        it('should test licenseRestriction(A)', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });

        it('should throw error', () => {
            expect(() => { motorcycleRider.licenseRestriction('dasd') }).to.throw();
        });
    });

    describe('motorcycleShowroom(engineVolume, maximumEngineVolume)', () => {

        it('should return There are ... available motorcycles matching your criteria!', () => {
            expect(motorcycleRider.motorcycleShowroom(['125', '250', '600'], 600)).to.equal(`There are 3 available motorcycles matching your criteria!`)
        })

        it('should return There are ... available motorcycles matching your criteria!', () => {
            expect(motorcycleRider.motorcycleShowroom(['125', '250', '600'], 250)).to.equal(`There are 2 available motorcycles matching your criteria!`)
        })

        it('should return There are ... available motorcycles matching your criteria!', () => {
            expect(motorcycleRider.motorcycleShowroom(['125', '250', '600'], 125)).to.equal(`There are 1 available motorcycles matching your criteria!`)
        })

        it('should expect engineVolume to equal maximumEngineVolume', () => {
            expect(() => { motorcycleRider.motorcycleShowroom(['125'], 1) }).to.throw();
        });

        it('should test arr and num params', () => {
            expect(() => { motorcycleRider.motorcycleShowroom(['1'], 1) }).to.throw();
        });

        it('should test if first param is empty array ', () => {
            expect(() => { motorcycleRider.motorcycleShowroom([], 51) }).to.throw();
        });

        it('should test if second param is under 50 ', () => {
            expect(() => { motorcycleRider.motorcycleShowroom(['423'], 49) }).to.throw();
        });

        it('should iff passed engineVolume or maximumEngineVolume parameter are not an array and number. ', () => {
            expect(() => { motorcycleRider.motorcycleShowroom(['423'], 'string') }).to.throw();
        });

        it('should iff passed engineVolume or maximumEngineVolume parameter are not an array and number. ', () => {
            expect(() => { motorcycleRider.motorcycleShowroom(1, 'string') }).to.throw();
        });
    });

    describe('otherSpendings(equipment, consumables, discount)', () => {
        it('should test without discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], false)).to.equal('You spend $230.00 for equipment and consumables!');
        });

        it('should test with discount', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], true)).to.equal('You spend $207.00 for equipment and consumables with 10% discount!');
        });

        it('should test without discount', () => {
            expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil'], false)).to.equal('You spend $370.00 for equipment and consumables!');
        });

        it('should test with discount', () => {
            expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil'], true)).to.equal('You spend $333.00 for equipment and consumables with 10% discount!');
        });

        it('should test if equipment is not array', () => {
            expect(() => motorcycleRider.otherSpendings(123, ['oil filter'], false)).to.throw();
        });
        it('should test if consumables is not array', () => {
            expect(() => motorcycleRider.otherSpendings(['helmet'], 123, false)).to.throw();
        });
        it('should test if discount is not boolean', () => {
            expect(() => motorcycleRider.otherSpendings(['helmet'], ['oil filter'], 123)).to.throw();
        });
    })
});