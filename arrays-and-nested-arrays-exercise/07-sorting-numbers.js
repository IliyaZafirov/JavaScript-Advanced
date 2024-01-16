// Sorting Numbers
// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on. 
// Return the resulting array.


function solve(arr) {

    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            let last = arr.pop();
            arr.splice(i, 0, last);

        }

    }
    return arr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])