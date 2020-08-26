/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    if (image[sr][sc] == newColor) return image
    const target = image[sr][sc]
    let x = image.length
    let y = image[0].length
    let dx = [-1, 1, 0, 0]
    let dy = [0, 0, -1, 1]
    dfs(image, sr, sc)
    function dfs(image, sr, sc) {
        if (sr < 0 || sc < 0 || sr >= x || sc >= y || image[sr][sc] != target) return
        image[sr][sc] = newColor
        for (let i = 0; i < 4; i++) {
            let cx = sr + dx[i]
            let cy = sc + dy[i]
            dfs(image, cx, cy)
        }
    }
    return image
};
let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
sr = 1, sc = 1, newColor = 2
console.log(floodFill(image, sr, sc, newColor));