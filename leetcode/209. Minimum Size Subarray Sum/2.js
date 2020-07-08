/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let i = 0
    let j = 0
    let sum = 0
    let ans = Infinity

    while (j < nums.length) {
        sum += nums[j]
        while (sum >= s) {
            ans = Math.min(ans, j - i + 1)
            sum -= nums[i]
            i++
        }
        j++
    }

    return ans === Infinity ? 0 : ans
};

let s = 7, nums =
[2,3,1,2,4,3]
console.log(minSubArrayLen(s, nums));