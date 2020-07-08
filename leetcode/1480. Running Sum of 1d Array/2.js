var runningSum = function (nums) {
    nums.reduce((prev, cur, index) => {
        nums[index] =  prev + cur
        return nums[index]
    })
    
};
let nums = [1, 2, 3, 4]

runningSum(nums)