/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    let m = dungeon.length;
    let n = dungeon[m - 1].length;
    let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(Infinity))
    dp[m][n - 1] = dp[m - 1][n] = 1;//当到达p后，假设刚好剩下1滴血;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let minHp = Math.min(dp[i + 1][j] - dungeon[i][j], dp[i][j + 1] - dungeon[i][j]);//因为只能向右或向下，所以求出向右或者向下时，消耗最低的那一步;
            dp[i][j] = Math.max(minHp, 1);//dp[i][j]是我们到达此坐标，还剩多少血;
        }
    }
    return dp[0][0];//出发时的最低血量
};


let dungeon = [
    [-2, -3, 3], 
    [-5, -10, 1], 
    [10, 30, -5]]

calculateMinimumHP(dungeon)