// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {
//     const target = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i != j) {
//                 if (target[i] || target[i] == 0) {
//                     target[i] = target[i] * nums[j]
//                 } else {
//                     target[i] = nums[j]
//                 }
//             }
//         }
//     }
//     return target

// };

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {

//     let l = [], r = [], res = []
//     l[0] = 1
//     for (let i = 1; i < nums.length; i++) {
//         l[i] = l[i - 1] * nums[i - 1]
//     }

//     r[nums.length - 1] = 1

//     for (let j = nums.length - 2; j >= 0; j--) {
//         r[j] = nums[j + 1] * r[j +1]
//     }

//     for (let n = 0; n < l.length; n++) {
//         res[n] = l[n] * r[n]
//     }

//     return res

// }



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const res = []

    let k = 1

    // 左边的乘积
    for (let i = 0; i < nums.length; i++) {
        res[i] = k
        k *= nums[i]
    }

    k = 1
    // 右边的乘积
    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] *= k
        k *= nums[j]
    }

    return res

};

console.log(productExceptSelf([1,2,3,4]))