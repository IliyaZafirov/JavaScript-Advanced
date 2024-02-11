// JS Advanced Exam Retake – 02 Aug 2023
// Problem 2. Inventory Management
// class InventoryManager {
// //TODO Implement this class
// }
//  Write a class InventoryManager, which implements the following functionality:
// Functionality
// Constructor
// Should have these 3 properties:
// capacity – Number
// items – Array (empty)
// outOfStock – Array (empty)
// At the initialization of the InventoryManager class, the constructor accepts the capacity.
// addItem(itemName, quantity)
// This method should allow adding items to the inventory. It accepts two parameters: itemName (string) and quantity (number).
// If the quantity is less than or equal to 0, throw an error with the message:
//  		"Quantity must be greater than zero."
// If the inventory is already full (reached the capacity), throw an error with the message:
//  		"The inventory is already full."
// If the item already exists in the inventory, increase the quantity of the existing item by the specified quantity. Otherwise, add a new item with the itemName and quantity to the items array.
// Return a string message in the format:
//  		"Added {quantity} {itemName}(s) to the inventory."
// sellItem(itemName, quantity)
// This method should allow selling items from the inventory. It accepts two parameters: itemName (string) and quantity (number).
// If the quantity is less than or equal to 0, throw an error with the message:
//  		"Quantity must be greater than zero."
// If the item does not exist in the inventory, throw an error with the message:
//  "The item {itemName} is not available in the inventory."
// If the quantity requested is greater than the available quantity of the item in the inventory, throw an error with the message:
//  "Not enough {itemName}(s) in stock."
// Decrease the quantity of the item in the inventory by the specified quantity.
// If the quantity of the item becomes 0 after selling, remove the item from the items array and add the itemName to the outOfStock array.
// Return a string message in the format:
//  "Sold {quantity} {itemName}(s) from the inventory."
// restockItem(itemName, quantity)
// This method should allow restocking items in the inventory. It accepts two parameters: itemName (string) and quantity (number).
// If the quantity is less than or equal to 0, throw an error with the message: 
// "Quantity must be greater than zero."
// If the item already exists in the inventory, increase the quantity of the existing item by the specified quantity. Otherwise, add a new item with the itemName and quantity to the items array.
// If the item exists in the outOfStock array, remove it from the outOfStock array.
// Return a string message in the format: 
// "Restocked {quantity} {itemName}(s) in the inventory."
// getInventorySummary()
// This method should return a summary of the current inventory.
// The summary should be a string with the following format:
//  On the first line:
//                                   "Current Inventory:" 
// For each item in the items array, add a line in the format: 
// "{itemName}: {quantity}"
// If there are items in the outOfStock array, add a line in the format:
//  "Out of Stock: {itemName1}, {itemName2}" (comma-separated list of item names)

class InventoryManager {
  
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        debugger
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if (this.capacity == 0) {
            throw new Error('The inventory is already full.');
        }

        const searchedItem = this.items.find(el => el.name == itemName);

        if (!searchedItem) {
            this.items.push({ name: itemName, qty: quantity });
            this.capacity--;
        } else {
            for (const el of this.items) {
                if (el.name == itemName) {
                    el.qty += quantity;
                }
            }
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        debugger
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const searchedItem = this.items.find(el => el.name == itemName);

        if (!searchedItem) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        if (quantity > searchedItem.qty) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        searchedItem.qty -= quantity;
        if (searchedItem.qty == 0) {
            this.items = this.items.filter(el => el.name != itemName);
            this.outOfStock.push(searchedItem.name);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        debugger
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        const searchedItem = this.items.find(el => el.name == itemName);
     
        if (searchedItem) {
            for (let el of this.items) {
                if (el.name == itemName) {
                    el.qty += quantity;
                }
            }
        } else {
            this.items.push({ name: itemName, qty: quantity });
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        debugger
        const result = [];
        this.items.forEach(el => result.push(`${el.name}: ${el.qty}`));

        return this.outOfStock.length > 0 ? `Current Inventory:\n${result.join('\n')}\nOut of Stock: ${this.outOfStock.join(', ')}` : `Current Inventory:\n${result.join('\n')}`;
    }
}

// const manager = new InventoryManager(2);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Paintbrush", 2));

// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));

const manager = new InventoryManager(3);
console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
