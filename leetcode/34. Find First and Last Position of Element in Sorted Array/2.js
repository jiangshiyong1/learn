/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
   let left = 0, right = nums.length -1
   while (nums[left] === target && left < nums.length) {
       left++
   }

   while (nums[right] === target && right >= 0) {
       right --
   }
   return [left ===0]
};

let nums = [8], target = 8
console.log(searchRange(nums, target))