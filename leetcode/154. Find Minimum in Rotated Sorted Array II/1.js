/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let right = nums.length - 1
    let left = 0
    while (left < right) {
        const mid = (left + right) >>> 1
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else if (nums[mid] == nums[right]) {
            right -= 1
        } else {
            right = mid
        }
    }
    return nums[left]
};
// let nums = [3, 3, 1, 3]
// let nums = [1, 3, 3]
// let nums = [10, 1, 10, 10, 10]
let nums = [3,1]
console.log(findMin(nums));