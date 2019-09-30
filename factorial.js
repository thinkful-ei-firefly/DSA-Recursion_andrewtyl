const factorial = function (n) {
    let m = Math.floor(n)
    if (m < 1) {
        return 'n should be a whole number >= 1'
    }
    else if (m == 1) {
        return 1
    }
    else {
        return (m * (factorial(m - 1)))
    }
}

console.log(factorial(5))