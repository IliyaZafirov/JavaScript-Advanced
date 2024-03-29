// ⦁	Biggest Element
// Write a function that finds the biggest element inside a matrix.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.

function solve(matrix) {

    let result = [];

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            result.push(matrix[i][j]);
        }
    }
    result.sort((a, b) => b - a);

    return result[0];
}
// solve([[20, 50, 10], [8, 33, 145]])
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])