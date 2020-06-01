/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const retArr = []
    let maxNum = 0
    for (let i in candies) {
        
        if (candies[i] > maxNum) {
            maxNum = candies[i]
        }
    }

    for (let i in candies) {
        retArr[i] = (candies[i] + extraCandies) >= maxNum
    }

    return retArr
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
