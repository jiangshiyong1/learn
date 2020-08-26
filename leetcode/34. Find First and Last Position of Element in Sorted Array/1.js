/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0, end = nums.length - 1
    while (start <= end) {
        const mid = (start + end) >>> 1
        if (nums[mid] > target) {
            end = mid - 1
        } else if (nums[mid] < target) {
            start = mid + 1
        } else {
            let lid = rid = mid
            while (lid > 0 && nums[lid-1] == target) {
                lid--
            }
            while (rid <= end && nums[rid+1] == target) {
                rid ++
            }
            return [lid, rid]
        }
    }
    return [-1,-1]

};

let nums = [8], target = 8
console.log(searchRange(nums, target))