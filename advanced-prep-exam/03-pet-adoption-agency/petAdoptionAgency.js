const petAdoptionAgency = {
    isPetAvailable(pet, availableCount, vaccinated) {
        if (typeof pet !== "string" || typeof availableCount !== "number" || typeof vaccinated !== "boolean") {
            throw new Error("Invalid input");
        }

        if (availableCount <= 0) {
            return `Sorry, there are no ${pet}(s) available for adoption at the agency.`;
        } else {
            if (vaccinated) {
                return `Great! We have ${availableCount} vaccinated ${pet}(s) available for adoption at the agency.`;
            } else {
                return `Great! We have ${availableCount} ${pet}(s) available for adoption, but they need vaccination.`;
            }

        }
    },
    getRecommendedPets(petList, desiredTraits) {
        let recommendedPets = [];

        if (!Array.isArray(petList) || typeof desiredTraits !== "string") {
            throw new Error("Invalid input");
        }

        petList.forEach((pet) => {
            if (pet.traits === desiredTraits) {
                recommendedPets.push(pet.name);
            }
        });

        if (recommendedPets.length === 0) {
            return `Sorry, we currently have no recommended pets with the desired traits: ${desiredTraits}.`;
        } else {
            return `Recommended pets with the desired traits (${desiredTraits}): ${recommendedPets.join(", ")}`;
        }
    },
    adoptPet(pet, adopterName) {
        if (typeof pet !== "string" || typeof adopterName !== "string") {
            throw new Error("Invalid input");
        }

        return `Congratulations, ${adopterName}! You have adopted ${pet} from the agency. Enjoy your time with your new furry friend!`;
    },
};

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

export { petAdoptionAgency }