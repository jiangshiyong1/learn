/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let n = grid.length
    let m = grid[0].length
    let f = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0))
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <=m; j++) {
            if(i==1) {
                f[i][j] = f[i][j-1] + grid[i-1][j-1]
            } else if(j==1) {
                f[i][j] = f[i-1][j] + grid[i-1][j-1]
            }else {
                f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + grid[i-1][j-1]
            }
        }
    }
    return f[n][m]

}
let grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]]

console.log(minPathSum(grid))