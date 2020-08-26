// var twoSum = function (nums, target) {
//     const targetArr = []
//     for (let i in nums) {
//         let tgN = target - nums[i]
//         let index = nums.indexOf(tgN)
//         if (index != -1 && index != i) {
//             targetArr.push(i, index)
//             nums.splice(i)
//             nums.splice(index)
//             nums.splice(index, 1)
//         }
//     }
//     return targetArr
// };

var twoSum = function (nums, target) {
    const hash = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            return [hash.get(nums[i]), i]
        } else {
            hash.set(target - nums[i], i)
        }
    }
    return [-1, -1]
};

console.log(twoSum([2, 7,  15], 22));
