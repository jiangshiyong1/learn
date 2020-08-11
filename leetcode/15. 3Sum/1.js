/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
   
    const ans = []
    if (nums == null || nums.length < 3) return ans
    for (let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let start = i + 1
        let end = nums.length - 1
        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end]
            if (sum < 0) {
                start++
            } else if (sum > 0) {
                end--
            } else {
                ans.push([nums[i], nums[start], nums[end]])
                while (start < end && nums[start] == nums[start + 1]) start++; // 去重
                while (start < end && nums[end] == nums[end - 1]) end--; // 去重
                start++
                end--
            }
        }

    }
    return ans

};

let nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
// let nums = [0, 0, 0, 0]

console.log(threeSum(nums));