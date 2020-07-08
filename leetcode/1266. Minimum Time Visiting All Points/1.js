/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let ans = 0
    points.reduce((total, cur) => {
        
        
        ans += Math.max(Math.abs(total[0] -cur[0]), Math.abs(total[1] -cur[1]))
        return cur
    })
    return ans
};
let points = [[1, 1], [3, 4], [-1, 0]]

console.log(minTimeToVisitAllPoints(points))