// List Processor
// Using a closure, create an inner object to process list commands. The commands supported should be the following:
// add <string> - adds the following string in an inner collection.
// remove <string> - removes all occurrences of the supplied <string> from the inner collection.
// print - prints all elements of the inner collection joined by ",".
// Input
// The input will come as an array of strings - each string represents a command to be executed from the command execution engine.
// Output
// For every print command - you should print on the console the inner collection joined by ",".

function solve(arr) {
    let result = [];

    let obj = {
        add: str => { result.push(str) },
        remove: str => { (result = result.filter(x => x !== str)) },
        print: () => { console.log(result.join(',')) }
    }

    arr.forEach(x => {
        const [command, value] = x.split(' ');
        obj[command](value);
    })

}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])