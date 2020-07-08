/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const nums1 = nums.splice(0,n)
    const ans = []

    for (let i = 0; i < nums1.length; i++) {
        ans.push(nums1[i],nums[i])
        
    }
    return ans
    
};

let nums = [2,5,1,3,4,7], n = 3

shuffle(nums, n)