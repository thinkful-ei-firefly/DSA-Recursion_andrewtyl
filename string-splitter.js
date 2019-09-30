const split = function (string, char) {
    if (string.length == 0) {
        return ''
    }
    else {
        if (string[0] == char) {
            return (split(string.slice(1), char))
        }
        else {
            return (string[0] + split(string.slice(1), char))
        }
    }
}

console.log(split('02/20/2020', '/'))