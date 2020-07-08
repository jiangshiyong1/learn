/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    const sortNums = nums.sort((a, b) => a - b)

    let ans = sortNums[0] + sortNums[1] + sortNums[2]
    for (let i = 0; i < sortNums.length; i++) {
        let start = i + 1, end = sortNums.length - 1
        while (start < end) {
            let sum = sortNums[i] + sortNums[start] + sortNums[end]

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