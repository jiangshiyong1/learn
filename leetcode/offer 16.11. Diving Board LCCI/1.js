/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
    if(k==0) return 0
    let dp = []
    for (let i = 0; i <= k; i++) {
        dp[i] = (k-i) * shorter + longer * i
    }
    return  Array.from(new Set(dp))
};

console.log(new Set([1,1,2]));
