/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) =>b-a)
    let j = 2, i =1
    let r =arr[0] -arr[1]
    while (j<arr.length) {
        if(arr[i] -arr[j] != r) return false
        i++
        j++
    }
    return true
};  