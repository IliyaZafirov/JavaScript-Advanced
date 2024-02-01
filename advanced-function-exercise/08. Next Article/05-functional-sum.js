// 	Functional Sum
// Write a function that adds a number passed to it to an internal sum and returns itself with its internal sum set to the new value, so it can be chained functionally. 
// Hint: Overwrite toString() of the function. 

// Input
// Your function needs to take one numeric argument.
// Output
// Your function needs to return itself with an updated context.


function add(n) {
    let temp = 0

    function recursive(x) {
        temp += x

        return recursive
    }
    recursive.toString = () => temp
    return recursive(n)
}

add(1)
add(1)(6)(-3)