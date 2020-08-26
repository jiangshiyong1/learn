/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 1 || n == 2) return n
    let p = 0, q = 0, r = 1
    for (let i = 1; i <= n; i++) {
        p = q
        q = r
        r = p + q
    }
    return r
};