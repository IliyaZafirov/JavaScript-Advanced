// ⦁	Aggregate Elements
// Write a program that performs different operations on an array of elements. Implement the following operations:
// ⦁	Sum(ai) - calculates the sum of all elements from the input array
// ⦁	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// ⦁	Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.


function solve(elements) {
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);

    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++)
            val = func(val, arr[i]);
        console.log(val);
    }
}
solve([1, 2, 3])
solve([2, 4, 8, 16])