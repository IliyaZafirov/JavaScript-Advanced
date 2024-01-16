// Rotate Array
// Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
// The input comes as two parameters – an array of strings and a number. The second parameter is the amount of rotation you need to perform.
// The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.


function solve(arr, rotations) {

    while (rotations !== 0) {
        let last = arr.pop();

        arr.unshift(last);
        rotations--;
    }

    console.log(arr.join(' '));

}
solve(['1',
    '2',
    '3',
    '4'],
    2)
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)