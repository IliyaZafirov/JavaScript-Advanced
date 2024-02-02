function sum(anyArray) {

    // if (!Array.isArray(anyArray)) return NaN;

    let sum = 0;

    for (let num of anyArray) {
        sum += Number(num);
    }
    return sum;
}

export { sum };