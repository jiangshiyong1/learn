var runningSum = function (nums) {
   let dp = []
   dp[0] = nums[0]
   for (let i = 1; i < nums.length; i++) {
       dp[i] = dp[i] = dp[i-1] + nums[i]
       
   }
   return dp
};