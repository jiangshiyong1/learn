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
    const targetArr = []
    const hashTable = {}
    for (let i in nums) {
        let tgN = target - nums[i]
        if (hashTable[tgN]) {
            targetArr.push(hashTable[tgN])
            targetArr.push(i)
            delete hashTable[tgN]
        } else {
            hashTable[nums[i]] = i
        }
    }
    return targetArr
};

console.log(twoSum([3, 2, 4], 6));
