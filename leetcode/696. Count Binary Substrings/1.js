/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    const counts = []
    let ptr = 0, n = s.length
    let ans = 0
    while (ptr < n) {
        let count = 0
        const c = s.charAt(ptr)
        while (ptr < n && s.charAt(ptr) === c) {
            count++
            ptr++
        }
        counts.push(count)
    }
    for (let i = 1; i < counts.length; i++) {
        ans += Math.min(counts[i], counts[i - 1])
    }
    return ans
};

let s = ""
console.log(countBinarySubstrings(s));