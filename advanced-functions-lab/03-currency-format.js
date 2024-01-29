// Currency Format
// Write a higher-order function createFormatter that fixes some of the parameters of another function. Your program will receive four parameters: three values and a function that takes 4 parameters and returns a formatted string (a monetary value with currency symbol). 
// Your task is to return a partially applied function, based on the input function that has its first three parameters fixed and only takes one parameter.
// You will receive the following function: 

// function currencyFormatter(separator, symbol, symbolFirst, value) {
//     let result = Math.trunc(value) + separator;
//     result += value.toFixed(2).substr(-2,2);
//     if (symbolFirst) return symbol + ' ' + result;
//     else return result + ' ' + symbol;
// }

// Receive and set the following parameters to fixed values:
// separator
// symbol
// symbolFirst
// The final parameter value is the one that the returned function must receive.
// Input
// You will receive four parameters:
// separator (string)
// symbol (string)
// symbolFirst (Boolean)
// formatter (function)
// Output
// You need to return a function that takes one parameter - value

function createFormatter(a, b, c, d) {
    return d.bind(null, a, b, c)
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
