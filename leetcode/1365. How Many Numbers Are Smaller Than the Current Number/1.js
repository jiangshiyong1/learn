/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sortNums = [...nums].sort((a,b)=>a-b)
    let ans = []
    for(let i =0;i< nums.length;i++){
        ans.push(sortNums.indexOf(nums[i]))
    }
    return ans
};

let nums  = [8,1,2,2,3]

smallerNumbersThanCurrent(nums)