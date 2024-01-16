// ⦁	Same Numbers
// Write a function that takes an integer number as an input and checks if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line, print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function solve(num) {

    let flag = true;
    let sum = 0;
    num.toString().split('').map((x, i, arr) => { sum += Number(x); if (x !== arr[0]) flag = false; });
    console.log(`${flag}\n${sum}`);
}
solve(2222222)
solve(1234)