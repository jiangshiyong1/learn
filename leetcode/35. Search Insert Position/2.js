/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = (left + right) >>> 1;
        if (nums[mid] < target)
            left = mid + 1;
        else right = mid - 1;
    }
    return left
};

let nums = [1, 3, 5, 6, 7],
    target = 99

console.log(searchInsert(nums, target));