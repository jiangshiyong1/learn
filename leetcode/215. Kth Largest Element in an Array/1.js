/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const sortNums = nums.sort((a, b) => b - a)
    return sortNums[k - 1]
};

let nums = [3, 2, 1, 5, 6, 4], k = 2
console.log(findKthLargest(nums, k));
