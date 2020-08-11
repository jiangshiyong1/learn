/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let ans = 0
    for (let i = 1; i < n; i++) {
        ans = Math.max(ans, i * (n - i), i * integerBreak(n - i))

    }
    return ans
};

console.log(integerBreak(10));