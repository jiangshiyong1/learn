/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    const set = new Set()
    const ja = J.split('')
    for (let i = 0; i < ja.length; i++) {
        set.add(ja[i])

    }

    let ans = 0
    const sa = S.split('')
    for (let j = 0; j < sa.length; j++) {
        if (set.has(sa[j])) {
            ans++
        }

    }
    return ans
};

let J = "aA", S = "aAAbbbb"
console.log(numJewelsInStones(J, S))