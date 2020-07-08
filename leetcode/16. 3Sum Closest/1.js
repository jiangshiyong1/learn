/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let sortNum = nums.sort((a, b) => a - b)

    let ans = sortNum[0] + sortNum[1] + sortNum[2]  
    for (let i = 0; i < sortNum.length; i++) {
        let start = i + 1, end = sortNum.length - 1
        while (start < end) {
            let sum = sortNum[i] + sortNum[start] + sortNum[end]
            if (Math.abs(target - sum) < Math.abs(target - ans)) {
                ans = sum
            }
            if (sum > target) {
                end--
            } else if (sum < target) {
                start++
            } else {
                return ans
            }
        }
    }

    return ans

};

let nums = [1, 2, 4, 8, 16, 32, 64, 128], target = 82

console.log(threeSumClosest(nums, target))