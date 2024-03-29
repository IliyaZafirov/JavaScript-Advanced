// ⦁	Store Catalogue
// You have to create a sorted catalog of store products. You will be given the products’ names and prices. You need to order them in alphabetical order. 
// Input
// The input comes as an array of strings. Each element holds info about a product in the following format:
// "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// Output
// As output, you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group's initial should be printed, and after that, the products should be printed with 2 spaces before their names. For more info check the examples.


function solve(arr) {

    let result = [];

    for (let el of arr) {
        let [product, price] = el.split(' : ')
        result.push({ 'name': product, 'price': price });

    }

    result.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    let current = '';

    for (let el of result) {

        if (current !== el.name[0]) {
            current = el.name[0];
            console.log(current);

            console.log(`  ${el.name}: ${el.price}`);
        }  else {
            console.log(`  ${el.name}: ${el.price}`);
        }
    }

}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)