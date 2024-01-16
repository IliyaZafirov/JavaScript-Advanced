// List of Names
// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.

function solve(arr) {

    arr.sort((a, b) =>
        a.localeCompare(b)
    )

    arr.forEach((el, i, arr) => {
        console.log(`${i+1}.${el}`);
    })
}
solve(["John", "Bob", "Christina", "Ema"])