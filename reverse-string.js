const reverseString = function (string) {
    if (string.length === 0){
        return ''
    }
    else {
        return (string.substr(-1) + reverseString(string.slice(0, (string.length - 1))))
    }
}

console.log(reverseString('hey there'))