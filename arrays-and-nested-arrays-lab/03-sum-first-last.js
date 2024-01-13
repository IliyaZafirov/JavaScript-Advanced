function solve(arr) {

    arr = arr.map(Number)
    console.log(arr.shift() + arr.pop());

}
solve(['20', '30', '40'])