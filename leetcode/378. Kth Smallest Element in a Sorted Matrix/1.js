/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    return matrix.toString().split(',').sort((a,b)=>a-b)[k-1]
};

let matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
],
    k = 8


kthSmallest(matrix, k)