/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let ptr = 0, n = s.length, ans = 0, last = 0, 
    while (ptr < n) {
        const c = s.charAt(ptr)
        const count = 0
        while (ptr < n && s.charAt(ptr) === c) {
            count++
            ptr++
        }
        ans += Math.min(last, count)
        count = last
    }
    return ans
};

let s = ""
console.log(countBinarySubstrings(s));