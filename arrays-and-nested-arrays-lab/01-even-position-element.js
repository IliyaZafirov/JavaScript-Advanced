function solve(arr) {

    let result = [];

    arr.forEach((el, i, arr) => {
        if (i % 2 == 0) return result.push(el)
    })

    console.log(result.join(' '));
}
solve(['20', '30', '40', '50', '60'])