import { assert } from 'chai';
import { petAdoptionAgency } from './petAdoptionAgency.js'

describe("Tests for petAdoptionAgency", () => {

    describe('isPetAvailable', () => {
        it('should return', () => {
            const result = petAdoptionAgency.isPetAvailable('Dog', 3, false);
            assert.equal(result, 'Great! We have 3 Dog(s) available for adoption, but they need vaccination.')
        })
        it('should return', () => {
            const result = petAdoptionAgency.isPetAvailable('Dog', 3, true);
            assert.equal(result, 'Great! We have 3 vaccinated Dog(s) available for adoption at the agency.')
        })
        it('should return', () => {
            const result = petAdoptionAgency.isPetAvailable('Dog', 0, true);
            assert.equal(result, 'Sorry, there are no Dog(s) available for adoption at the agency.')
        })
   
    })

    describe("getRecommendedPets", () => {
        const petList = [
            { name: "Fluffy", traits: "Playful" },
            { name: "Whiskers", traits: "Cuddly" },
            { name: "Fido", traits: "Playful" },
        ];

        it("should return a list of recommended pets with the desired traits", () => {
            const result = petAdoptionAgency.getRecommendedPets(petList, "Playful");
            assert.equal(result, "Recommended pets with the desired traits (Playful): Fluffy, Fido");
        });

        it("should return 'Sorry, we currently have no recommended pets with the desired traits: Sleepy.' when no recommended pets", () => {
            const result = petAdoptionAgency.getRecommendedPets(petList, "Sleepy");
            assert.equal(result, "Sorry, we currently have no recommended pets with the desired traits: Sleepy.");
        });

        it("should throw an error 'Invalid input' for invalid input parameters", () => {
            assert.throws(() => petAdoptionAgency.getRecommendedPets("invalid", "Playful"), "Invalid input");
        });

        it("should throw an error 'Invalid input' for invalid input parameters", () => {
            assert.throws(() => petAdoptionAgency.getRecommendedPets([{ name: "Fluffy", traits: "Playful" }], 100), "Invalid input");
        });
    });

    describe("adoptPet", function () {

        it("should return a success message when adopting a pet", () => {
            const result = petAdoptionAgency.adoptPet("Whiskers", "Alice");
            assert.equal(result, "Congratulations, Alice! You have adopted Whiskers from the agency. Enjoy your time with your new furry friend!");
        });

        it("should throw an error 'Invalid input' for non-string inputs", () => {
            assert.throws(() => petAdoptionAgency.adoptPet(100, "Alice"), "Invalid input");
        });

        it("should throw an error 'Invalid input' for non-string inputs", () => {
            assert.throws(() => petAdoptionAgency.adoptPet("Fluffy", 100), "Invalid input");
        });
    });
});


// // There is a need for validation of the input, the pet parameter should be a string,
// //  the availableCount parameter should be an number and vaccinated should be a boolean.
// //  In case of invalid parameters, the function should throw an error: "Invalid input"
// console.log(petAdoptionAgency.isPetAvailable('Dogs', 3, false));
// console.log(petAdoptionAgency.isPetAvailable('Dogs', 3, true));
// // console.log(petAdoptionAgency.isPetAvailable(typeof === string 'Dogs', typeof === number 3, typeof === boolean false));
// console.log(petAdoptionAgency.isPetAvailable('Dogs', 3, false));

// console.log('---------');

// // You need to validate the input; if petList and desiredTraits are not an array and  a string, the function should throw an error:
// console.log(petAdoptionAgency.getRecommendedPets([{ name: 'Darsy', traits: 'Most Wanted Truffle Hunter Dog' }, { name: 'Tara', traits: 'Lovely Dog' }, { name: 'Hera', traits: 'Skinny Princess' }, { name: 'Amber', traits: 'Most Wanted Long Hair Dog' }], 'Most Wanted Truffle Hunter Dog'));
// console.log(petAdoptionAgency.getRecommendedPets([{ name: 'Darsy', traits: 'Crazy' }, { name: 'Tara', traits: 'Lovely Dog' }, { name: 'Hera', traits: 'Skinny Princess' }, { name: 'Amber', traits: 'Most Wanted Long Hair Dog' }], 'Most Lazy Dog'));

// console.log('---------');

// //it includes input validation: if pet is not a string or adopterName is not a string, it throws an error with the message: "Invalid input"
// console.log(petAdoptionAgency.adoptPet('Korina', 'Shaker'));
// // petAdoptionAgency.adoptPet(1234, 'Shaker');
// // petAdoptionAgency.adoptPet('Korina', 1234);
