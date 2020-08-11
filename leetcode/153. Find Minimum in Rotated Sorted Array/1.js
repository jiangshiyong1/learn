/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let height = nums.length - 1
    let low = 0
    while (low < height) {
        let mid = (low + height) >>> 1
        if (nums[mid] > nums[height]) {
            low = mid + 1
        } else {
            height = mid
        }

    }
    return nums[low]
};

console.log(findMin([ 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5]))