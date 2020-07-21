/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let low = 0, height = numbers.length - 1
    while (low <= height) {
        const sum = numbers[low] + numbers[height]
        if (sum == target) {
            return [low + 1, height + 1]
        } else if (sum < target) {
            low++

        } else {
            height--
        }
    }

    return []
};

let numbers = [2, 7, 11, 15], target = 18
console.log(twoSum(numbers, target))