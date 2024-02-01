// Sub Sum
// Write a function to sum a range of numeric elements from an array. 
// The function takes three parameters - the first is an array, the second is the start index and the third is the end index. Both indexes are inclusive. Have in mind that the array elements may not be of type Number and cast everything. Implement the following error handling:
// If the first element is not an array, return NaN
// If the start index is less than zero, consider its value to be a zero
// If the end index is outside the bounds of the array, assume it points to the last index of the array
// Input / Output
// Your function must take three parameters. As output, return the sum.

function solve(arr, startIdx, endIdx) {

    if (!Array.isArray(arr)) return NaN;

    if (startIdx < 0) startIdx = 0;

    if (endIdx > arr.length - 1) endIdx = arr.length - 1;

    return arr.slice(startIdx, endIdx + 1).map(Number).reduce((acc, x) => acc + x, 0);
}
solve([10, 20, 30, 40, 50, 60], 3, 300)