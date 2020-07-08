/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let preSum = 0
    const ans = []
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i] + preSum
        preSum += nums[i]
    }
    return ans
};