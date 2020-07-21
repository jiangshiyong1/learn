/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let j = 1
    for (let i = 0; i < numbers.length; j++) {
        if (numbers[i] + numbers[j] == target)
            return [i + 1, j + 1]
        if (numbers[i] + numbers[j] > target || j == numbers.length-1) i++, j = i

    }
};

let numbers = [5, 25, 75], target =
    100
console.log(twoSum(numbers, target))