// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//     if (strs.length == 0) {
//         return ''
//     }
//     let ans = strs[0]
//     for (let i = 0; i < strs.length; i++) {
//         let j = 0
//         for (; j < strs[i].length && j < ans.length; j++) {
//             if (strs[i][j] !== ans[j]) {
//                 break;
//             }
//         }
//         ans = ans.substring(0, j)
//     }
//     return ans
// };


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = strs[0]
    if(!str) return ''
    let res = ''
    for(let i = 0; i < str.length; i++){
      let flag = strs.every(item => item[i] == str[i])
      if (flag) {
        res += str[i]
      }else {
        return res
      }
    }
    return res
  };
  


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
