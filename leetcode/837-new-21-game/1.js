/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function (N, K, W) {
    let s = 0
    let dp = new Array(K + W)
    for (let i = K; i < K + W; i++) {
        if (i < N) {
            dp[i] = 1
        } else {
            dp[i] = 0
        }
        s += dp[i]
    }

    for (let i = K - 1; i > 0; i--) {
        dp[i] = s / W
        s = dp[i] + s - dp[i + W]
    }
    return dp[0]
};