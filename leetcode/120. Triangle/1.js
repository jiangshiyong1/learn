/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let n = triangle.length
    let f = Array.from(new Array(n), () => new Array())
    f[0][0] = triangle[0][0]
    for (let i = 1; i < n; i++) {
        f[i][0] = f[i - 1][0] + triangle[i][0]
        for (let j = 1; j < i; j++) {
            f[i][j] = Math.min(f[i - 1][j - 1] + triangle[i][j], f[i - 1][j] + triangle[i][j])
        }
        
        f[i][i] = f[i - 1][i - 1] + triangle[i][i]
    }
    let minTotal = f[n - 1][0]
    for (let m = 1; m < n; m++) {
        minTotal = Math.min(minTotal, f[n - 1][m])
    }
    console.log(f);
    return minTotal
};

let triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]

console.log(minimumTotal(triangle))

