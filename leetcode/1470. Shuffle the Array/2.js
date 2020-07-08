/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let index = 1
    let count = n
    for (let i = 0; i < n; i++) {
        nums.splice(index, 0, nums[count])
        count+=2
        index += 2

    }

    return nums.splice(0,2*n)

};

let nums = [2, 5, 1, 3, 4, 7], n = 3

shuffle(nums, n)