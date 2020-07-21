/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let n = triangle.length
    let f = Array.from(new Array(2), () => new Array(n))

    f[0][0] = triangle[0][0]

    for (let i = 1; i < n; i++) {
        let curr = i % 2
        let prev = 1 = -curr
        f[curr][0] = f[prev][0] + triangle[i][0]
        for (let j = 1; j < i; j++) {
            f[curr][j] = Math.min(f[prev][j - 1].f[prev][j]) + triangle[i][j]

        }
        f[curr][i] = f[prev][i] + triangle[i][i]
    }

    
};

let triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]

console.log(minimumTotal(triangle))

