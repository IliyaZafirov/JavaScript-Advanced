// ⦁	Diagonal Sums
// A square matrix of numbers comes as an array of arrays, each array holding numbers. Write a function that finds the sum at the main and the secondary diagonals.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.


function solve(matrix) {

    let main = 0;

    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i];

    }

    let secondary = 0;

    for (let i = 0; i < matrix.length; i++) {
        secondary += matrix[i][matrix.length - 1 - i];

    }
    console.log(main, secondary);
}
solve([
    [20, 40],
    [10, 60]])

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])