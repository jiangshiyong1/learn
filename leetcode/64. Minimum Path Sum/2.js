/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    function calculate(grid, i, j) {
        if (i == grid.length || j == grid[0].length) return Infinity
        if (i == grid.length - 1 && j == grid[0].length - 1) return grid[i][j]
        return grid[i][j] + Math.min(calculate(grid, i + 1, j), calculate(grid, i, j + 1))
    }

    return calculate(grid, 0, 0)


}
let grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]]

console.log(minPathSum(grid))