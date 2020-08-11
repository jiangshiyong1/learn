/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    const memo = new Array(n + 1)
    const dfs = (n) => {
        if (memo[n]) return memo[n]
        let ans = 0
        for (let i = 1; i < n; i++) {
            ans = Math.max(ans, i * (n - i), i * dfs(n - i))
        }
        return memo[n] = ans
    }

    return dfs(n)
};

console.log(integerBreak(10));