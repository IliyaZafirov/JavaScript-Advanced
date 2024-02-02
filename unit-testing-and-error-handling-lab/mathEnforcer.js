// ⦁	Math Enforcer
//      Your task is to test an object named mathEnforcer, which should have the following functionality: 
// ⦁	addFive(num) - A function that accepts a single parameter:
// ⦁	If the parameter is NOT a number, the function should return undefined.
// ⦁	If the parameter is a number, add 5 to it, and return the result.
// ⦁	subtractTen(num) - A function that accepts a single parameter:
// ⦁	If the parameter is NOT a number, the function should return undefined.
// ⦁	If the parameter is a number, subtract 10 from it, and return the result.
// ⦁	sum(num1, num2) - A function that accepts two parameters:
// ⦁	If any of the 2 parameters is NOT a number, the function should return undefined.
// ⦁	If both parameters are numbers, the function should return their sum. 

// JS Code
// You are provided with an implementation of the mathEnforcer object:
// mathEnforcer.js
// let mathEnforcer = {
//     addFive: function (num) {
//         if (typeof(num) !== 'number') {
//             return undefined;
//         }
//         return num + 5;
//     },
//     subtractTen: function (num) {
//         if (typeof(num) !== 'number') {
//             return undefined;
//         }
//         return num - 10;
//     },
//     sum: function (num1, num2) {
//         if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
//             return undefined;
//         }
//         return num1 + num2;
//     }
// };
// The methods should function correctly for positive, negative, and floating-point numbers. In the case of floating-point numbers, the result should be considered correct if it is within 0.01 of the correct value. 

// Screenshots
// When testing a more complex object write a nested description for each function:

// Your tests will be supplied with a variable named "mathEnforcer" which contains the mentioned above logic. All test cases you write should reference this variable.

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

export { mathEnforcer };