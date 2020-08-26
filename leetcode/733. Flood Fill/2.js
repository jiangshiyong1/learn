/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    let x = image.length
    let y = image[0].length
    let dx = [-1, 1, 0, 0]
    let dy = [0, 0, -1, 1]
    if (image[sr][sc] == newColor) return image
    const target = image[sr][sc]
    const queue = []
    queue.push([sr, sc])

    while (queue.length != 0) {
        const ceil = queue.shift()
        let sr = ceil[0]
        let sc = ceil[1]
        if (sr < 0 || sr >= x || sc < 0 || sc >= y || image[sr][sc] != target) continue
        image[sr][sc] = newColor
        for (let i = 0; i < 4; i++) {
            let cx = sr + dx[i]
            let cy = sc+ dy[i]
            queue.push([cx, cy])
        }
    }
    return image
};
let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
sr = 1, sc = 1, newColor = 2
console.log(floodFill(image, sr, sc, newColor));