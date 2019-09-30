const tri = function (n) {
    if (n < 0) {
        return 'n should be >= 0'
    }
    else if (n == 0) {
        return 0
    }
    else {
        return (n + tri(n - 1))
    }
}

for (let i = 0; i < 10; i++) {
    console.log(tri(i))
}