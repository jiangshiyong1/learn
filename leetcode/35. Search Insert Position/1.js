/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target || nums[i] > target) {
            return i
        }
        if (i == nums.length - 1 && nums[i] < target) {
            return i + 1
        }
    }
};

let nums = [1, 3, 5, 6],
    target = 62

console.log(searchInsert(nums, target));