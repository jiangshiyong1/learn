/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    if (A.length < B.length)
        return findLengthHelper(A, B)
    return findLengthHelper(B, A)
};

var findLengthHelper = function (A, B) {
    let n = A.length, m = B.length
    let total = n + m - 1
    let max = 0
    for (let i = 0; i < total; i++) {
        let as = 0
        let bs = 0
        let len = 0
        if (i < as) {
            as = n - i -  1
            bs = 0
            len = i + 1
        } else {
            as = 0
            bs = i - n + 1
            len = Math.min(m - bs, n)
        }
        let maxLen = maxLength(A, B, as, bs, len)
        max = Math.max(max, maxLen)

    }
    return max
}

var maxLength = function (A, B, as, bs, len) {
    let max = 0, count = 0
    for (let i = 0; i < len; i++) {
        if (A[as + i] == B[bs + i]) {
            count++
            max = Math.max(max, count)
        } else {
            count = 0
        }

    }
    return max
}


let A = [1, 2, 3, 2, 1],
    B = [3, 2, 1, 4]

console.log(findLength(A, B));

