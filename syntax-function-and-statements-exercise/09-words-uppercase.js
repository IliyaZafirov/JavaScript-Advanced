function solve(str) {


    let splitted = str.split(' ');

    for (let el of splitted) {
        if (el.includes(/\W*/gm)) {
            console.log(el);
        }
    }
}
solve('Hi, how are you?')
console.log('hello');