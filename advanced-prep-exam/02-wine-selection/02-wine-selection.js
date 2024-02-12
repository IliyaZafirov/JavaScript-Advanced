// ⦁	Problem 2. Wine Selection

// Write a class WineSelection, which implements the following functionality:
// Functionality
// Constructor
// Should have these 3 properties:
// ⦁	space – Number
// ⦁	wines – Array(empty)
// ⦁	bill - number
// At the initialization of the WineSelection class, the constructor accepts the space.
//     Hint: You can add more properties to help you finish the task.

//         reserveABottle(wineName, wineType, price)
// The wineName and wineType are of type string and price is type number. 
// ⦁	If there's not enough space in the cellar for the bottle, throw an Error:
// "Not enough space in the cellar."
// ⦁	Otherwise, this function should add the wine, with the properties: wineName, wineType, price, paid: default false, to the wines array and return:
// "You reserved a bottle of {wineName} {wineType} wine."

// payWineBottle(wineName, price) 
// The wineName is type string and price is type number.
// ⦁	If the wine is not found, throw an Error:
// "{wineName} is not in the cellar."
// ⦁	If the wine has already paid, throw an Error:
// "{wineName} has already been paid."
// ⦁	Otherwise, this function set paid to true on the found wine, add price of the bottle to bill and return:
// "You bought a {wineName} for a {price}$."

// openBottle(wineName) 
// ⦁	If the wine is not found, throw an Error:
// "The wine, you're looking for, is not found."
// ⦁	If the wine hasn't paid, throw an Error:
// "{wineName} need to be paid before open the bottle."
// ⦁	Otherwise, this function should remove the wine from the array and return:
// "You drank a bottle of {wineName}."

// cellarRevision(wineType)
// This method can be called with one parameter or without any.
//  If no parameter is provided, the method should return the full information of the cellar 
// ⦁	At the first line:
// "You have space for { emptySlots } bottles more."
// ⦁	At the second line:
// "You paid {bill}$ for the wine."
// ⦁	On the next lines, display information about each wine, sorted alphabetically ascending, by their wineName:
// "{wineName} > {wineType} - {Has Paid / Not Paid}."
// If the method is called with a parameter for wineType:
// ⦁	Return only the information about the wine from the given wineType:
// "{wineName} > {wineType} - {Has Paid / Not Paid}."
// ⦁	If there is no such wine type found, throw an Error:
// "There is no {wineType} in the cellar."


class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space < 1) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({ name: wineName, type: wineType, price, paid: false });
        this.space--;

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        debugger
        const searchWine = this.wines.find(el => el.name == wineName);

        if (!searchWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (searchWine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }
        this.bill += searchWine.price;
        searchWine.paid = true;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const searchWine = this.wines.find(el => el.name == wineName);

        if (!searchWine) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }

        if (!searchWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines.filter(el => el !== searchWine);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            const result = [];
            this.wines.sort((a, b) => a.name.localeCompare(b.name));
            this.wines.forEach(el => result.push(`${el.name} > ${el.type} - ${el.paid ? "Has Paid" : 'Not Paid'}.`));
            return `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n${result.join('\n')}`;
        }

        const searchedWine = this.wines.find(el => el.type == wineType);

        if (!searchedWine) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        return `${searchedWine.name} > ${wineType} - ${searchedWine.paid ? "Has Paid" : 'Not Paid'}.`;
    }

}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());

