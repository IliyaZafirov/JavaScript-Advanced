// ⦁	Process Odd Positions
// You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line, separated by space.

function solve(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 != 0) {

            newArr.push(arr[i] * 2);
        }

    }

    return newArr.reverse();
}
console.log(solve([10, 15, 20, 25]));
// solve([3, 0, 10, 4, 7, 3])