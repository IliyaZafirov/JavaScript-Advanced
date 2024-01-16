// Extract Increasing Subset from Array
// Write a function that extracts only those numbers that form a non-decreasing subset. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 
// The input comes as an array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subset. Return the array of numbers.

function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (i == 0) {
            result.push(arr[i]);
        } else if (result[result.length - 1] <= arr[i]) {
            result.push(arr[i]);
        }

    }
    return result;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))
solve([1,
    2,
    3,
    4])
solve([20,
    3,
    2,
    15,
    6,
    1])