/**
 * @param {number} n
 * @return {number}
 */
// var sumNums = function (n) {
//     if (n === 1) {
//         return 1
//     }

//     let sum = n

//     sum += sumNums(n - 1)

//     return sum

// };



// var sumNums = function (n, total = 0) {

//     return n === 0 ? total : sumNums(n - 1, n + total)

// };



// var sumNums = function (n) {
//     return n && sumNums(n - 1) + n
// };

var sumNums = function (n) {

    return new Array(n).fill(0).reduce((sum, v, i) => sum + i, n)

};




console.log(sumNums(3));
console.log(sumNums(9));
