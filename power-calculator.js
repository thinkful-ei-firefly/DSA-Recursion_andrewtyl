const powerCalculator = function (x, y) {
    if (y < 0) {
        return 'exponent should be >= 0'
    }
    else {
        const power = function (a, b) {
            if (b <= 0) {
                return 1
            }
            else {
                return (a * power(a, (b-1)))
            }
        }
        return (x * (power(x, (y-1))))
    }
}

console.log(powerCalculator(10, 2))
console.log(powerCalculator(10, -2))