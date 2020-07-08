/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let minLen = Infinity
    let i = 0
    let j = 0
    let sum = 0
    while (j < nums.length) {
        sum += nums[j]

        while (sum >= s) {
            minLen = Math.min(minLen, j - i - 1)
            sum -= num[i]
            i++
        }
        j++
    }

    return minLen === Infinity ? 0 : minLen

};

let s = 213, nums =
    [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]
console.log(minSubArrayLen(s, nums));

