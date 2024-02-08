// ⦁	Problem 2.Fashion Retail Management
 
// In the dynamic world of fashion retail, efficiently managing inventory is pivotal for catering to the ever-evolving demands of customers who seek clothing, shoes, and accessories. To meet these demands, you need to design a class named "FashionRetailInventory with updated functionality tailored to this specialized environment.
// Functionality
// Constructor
// Should have these 3 properties:
// ⦁	storehouse  (string);
// ⦁	location  (string);
// ⦁	productStock   (empty array);
// At the initialization of the FashionRetailInventory class, the constructor accepts the storehouse and location. 

// addProduct (productName, size, quantity, price)
// This method adds a fashion product to the store's inventory. The method accepts four arguments:
// ⦁	productName (string);
// ⦁	size (string);
// ⦁	quantity (number);
// ⦁	price (number);
// ⦁	If a product with the same name and size already exists in the productStock, add the quantity to the product and return the following message:
// `You added ${quantity} more pieces of product ${productName} size ${size}`
// ⦁	Otherwise, add the product with properties: {productName, size, quantity, price} to the productStock and return the following message: 

// `The product ${productName}, size ${size} was successfully added to the inventory`
// sendProduct (productName, size) 
// This method allows the sending of a product from the store's inventory. The method accepts two arguments:
// ⦁	productName (string);
// ⦁	size (string);
// ⦁	If the product with the given name and size is not present in the productStock, throw an error with the following message:

// `The product ${productName}, size ${size} is not in the inventory`

// ⦁	Otherwise, remove the product from the productStock and return the following message:
// `The product ${productName}, size ${size} was successfully removed from the inventory`

// findProductsBySize(size)
// The method accepts one arguments:
// ⦁	size (string);

// ⦁	Iterate through the productStock array and find all products that match the specified size and return a list of the products that match the given size in the format:

// `${product1}-${quantity} pieces, ${product2}-${quantity} pieces,…`

// ⦁	If no products matching the specified size are found in the productStock, return:
// `There are no products available in that size`
// listProducts () 
// ⦁	If there are no products in stock, return:
// `${storehouse} storehouse is empty`
// ⦁	Otherwise, on the first line return:
// `${storehouse} storehouse in ${location} available products:`
// ⦁	On the next lines, display information about each product, sorted in alphabetical order by their productName in the following format:
// `${productName}/Size:${size}/Quantity:${quantity}/Price:${price}$`

class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, qty, price) {
        debugger
        const existingProduct = this.productStock.find(product => product.productName === productName && product.size === size);

        if (existingProduct) {
            existingProduct.qty += qty;
            return `You added ${qty} more pieces of product ${productName} size ${size}`;
        } else {
            this.productStock.push({ productName, size, qty, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {
        const existingProduct = this.productStock.find(product => product.productName === productName && product.size === size);

        if (existingProduct) {
            const idx = this.productStock.indexOf(existingProduct);
            this.productStock.splice(idx, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        } else {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
    }

    findProductsBySize(size) {
        const result = this.productStock.filter(product => product.size === size);

        if (result.length > 0) {
            const res = [];
            result.forEach(el => res.push(`${el.productName}-${el.qty} pieces`));
            return res.join(', ');
        } else {
            return `There are no products available in that size`;
        }
    }

    listProducts() {
        const buff = `${this.storehouse} storehouse in ${this.location} available products:\n`;
        const sorted = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
        const res = [];
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`;
        } else {
            sorted.forEach(el => res.push(`${el.productName}/Size:${el.size}/Quantity:${el.qty}/Price:${el.price}$`))
            return buff + res.join('\n');
        }
    }
}

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));

// console.log(storeHouse.listProducts());

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());

