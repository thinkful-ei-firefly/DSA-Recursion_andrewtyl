const sheep = function (num) {
    //Base
    if (num === 0) {
        console.log('All sheep have jumped over the fence')
        return
    }
    else {
        console.log(`${num}: Another sheep jumps over the fence`)
        return sheep(num - 1)
    }
}

sheep(3)