// function solve(inputArr) {

//     let sum = inputArr.reduce((acc, currVal) => acc + currVal)

//     console.log(sum);

//     let inverseSum = inputArr.reduce((acc, currVal) => acc + (1 / currVal))

//     console.log(inverseSum);

//     let concat = inputArr.join('');

//     console.log(concat);

// }

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