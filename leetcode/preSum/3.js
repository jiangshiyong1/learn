/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
    let preSumModK = 0
    let count = 0
    let map = { 0: 1 }
    for (let i = 0; i < A.length; i++) {
        preSumModK += (preSumModK + A[i]) % K
        if (map[preSumModK]) {
            count += map[preSumModK]
            map[preSumModK]++
        } else {
            map[preSumModK] = 1
        }
    }
};