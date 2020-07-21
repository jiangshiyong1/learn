
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let ans = 0
    let j = 0
    for (let i = 0; i < nums.length; j++) {
        if (j == nums.length) i++

        i < j && nums[i] == nums[j] && ans++
        
    }
    return ans
};


console.log(numIdenticalPairs(nums))
let nums = [1, 2, 3, 1, 1, 3]