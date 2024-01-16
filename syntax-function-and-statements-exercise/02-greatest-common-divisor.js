// ⦁	Greatest Common Divisor - GCD
// Write a function that takes two positive numbers as input and computes the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.

function solve(a, b) {

    let GCD = a % b;

    while (GCD !== 0) {
        a = b;
        b = GCD;
        GCD = a % b;
    }

    console.log(b);

}
// solve(15, 5)
solve(2154, 458)