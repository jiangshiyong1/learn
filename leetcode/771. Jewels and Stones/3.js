/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    const reg = new RegExp('[' + J + ']')
    const ar = S.split(reg)
    return ar.length - 1
};

let J = "aA", S = "aAAbbbb"
console.log(numJewelsInStones(J, S))