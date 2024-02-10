// Problem 2. OnlineShop
// class OnlineShop {
// 	//TODO Implement this class
// }
// Write a class OnlineShop, which implements the following functionality:
// Functionality
// Constructor
// Should have these 3 properties:
// warehouseSpace – Number
// products – Array (empty)
// sales – Array (empty)
// At the initialization of the OnlineShop class, the constructor accepts the warehouseSpace.
// loadingStore(product, quantity, spaceRequired)
// The product is of type string, while the spaceRequired and quantity are of type number. 
// If there is not enough space in the warehouse for the new product, throw an Error:
// "Not enough space in the warehouse."
// Otherwise, this function should add the product with the properties: product and quantity to the products array, reduce the space available with the space required by the product, and return:
// "The {product} has been successfully delivered in the warehouse."
// NOTE: Product names will be unique.

// quantityCheck(product, minimalQuantity)
// The minimalQuantity is of type number.
// If the product is not found, throw an Error:
// "There is no {product} in the warehouse."
// If the received minimalQuantity is less than or equal to 0, throw an Error:
// "The quantity cannot be zero or negative."
// If the received minimalQuantity is less or equal to the product quantity in the warehouse, return:
// "You have enough from product {product}."
// Otherwise, this function should replace the value of product quantity with a minimalQuantity value and return:
// "You added {difference} more from the {product} products."
// Difference is the number between the minimum quantity and the product quantity. 

// sellProduct(product) 
// If the product is not found, throw an Error:
// "There is no {product} in the warehouse."
// Otherwise, this function should decrement by 1 the product quantity from the product in the products array, add it to sales with properties {product} and {1} for quantity, and return: 
// "The {product} has been successfully sold."

// revision()
// This method should return the complete information about the shop: 
// If nothing is sold, throw an Error:
// "There are no sales today!"
// Otherwise, return how many sales you have:
// "You sold {sales} products today!"
// On the second line:
// "Products in the warehouse:"
// On the new line, display information about each product in the warehouse:
// "{product}-{quantity} more left"


class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];

    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace >= spaceRequired) {
            this.products.push({ name: product, qty: quantity });
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`;
        } else {
            throw new Error('Not enough space in the warehouse.')
        }
    }

    quantityCheck(product, minimalQuantity) {
        const searchedProduct = this.products.find(el => el.name == product);
        if (!searchedProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.')
        }

        if (minimalQuantity <= searchedProduct.qty) {
            return `You have enough from product ${product}.`;
        }

        debugger
        const thisProduct = this.products.find(el => el.name == product)
        const difference = minimalQuantity - thisProduct.qty
        this.products.map(el => {
            if (el.name == product) {
                el.qty = minimalQuantity;
            }
            return;
        });
        return `You added ${(difference)} more from the ${product} products.`
    }


    sellProduct(product) {
        const searchedProduct = this.products.find(el => el.name == product);

        if (!searchedProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        this.products.forEach(el => {
            if (el.name == product) {
                el.qty -= 1;
                this.sales.push({ product, qty: 1 });
            }
            return;
        })

        return `The ${product} has been successfully sold.`;
    }


    revision() {

        const result = [];

        for (let { name, qty } of this.products) {
            result.push(`${name}-${qty} more left`);
        }

        if (this.sales.length < 1) {
            throw new Error('There are no sales today!');
        } else {
            return `You sold ${this.sales.length} products today!\nProducts in the warehouse:\n${result.join('\n')}`;
        }
    }

}

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
