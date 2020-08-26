var solve = function (board) {
    let queue = []
    let dx = [-1, 1, 0, 0]
    let dy = [0, 0, -1, 1]
    let n = board.length
    if (n === 0) return []
    let m = board[0].length
    for (let i = 0; i < n; i++) {
        if (board[i][0] === 'O') {
            queue.push([i, 0])
        }
        if (board[i][m - 1] === 'O') {
            queue.push([i, m - 1])
        }
    }

    for (let i = 1; i < m - 1; i++) {
        if (board[0][i] === 'O') {
            queue.push([0, i])
        }
        if (board[n - 1][i] === 'O') {
            queue.push([n - 1, i])
        }
    }
    while (queue.length != 0) {
        const cell = queue.shift()
        let x = cell[0], y = cell[1]
        board[x][y] = 'A'
        for (let i = 0; i < 4; i++) {
            let mx = x + dx[i], my  = y + dy[i]
            if (mx < 0 || my < 0 || mx >= n || my >= m || board[mx][my] != 'O') continue
            queue.push([mx, my])
        }

    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'A') {
                board[i][j] = 'O'
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }

    return board
};

let board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]

console.log(solve(board));
