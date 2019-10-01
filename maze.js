const maze = function (m, x, y) {
    if (y >= m.length || y < 0) {
        return
    }
    if (x >= m[y].length || x < 0) {
        return
    }
    let v = m[y][x]
    //console.log(`v:${v}, y:${y}, x:${x}`)
    if (v === '*' || v === 'x') {
        return
    }
    else if (v === 'e') {
        console.log('exit found')
        console.log(m)
        return
    }
    else {
        m[y][x] = 'x'
        maze(m, x + 1, y)
        maze(m, x, y + 1)
        maze(m, x - 1, y)
        maze(m, x, y - 1)
        m[y][x] = v
    }
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let myBigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let myOwnMaze = [
    [' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', '*', ' '],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', ' ', 'x']
];

maze(mySmallMaze, 0, 0)
//console.log(maze(myBigMaze, 0, 0))
//console.log(maze(myOwnMaze, 0, 0))