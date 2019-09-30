const fib = function (n) {
    let m = Math.floor(n)
    if (m < 1) {
        return 'n should be > 1'
    }
    else {
        const fib2 = function (x) {
            if (x == 1 || x == 2) {
                return 1
            }
            else {
                let d = ((fib2(x - 1)) + (fib2(x - 2)))
                return d
            }
        }
        let arr = []
        for (let i = 1; i <= m; i++) {
            arr.push(fib2(i))
        }
        return arr
    }
}

console.log(fib(7))