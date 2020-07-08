/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let max = 0
  let n1 = A.length, n2 = B.length
  let dp = Array.from(new Array(n1+1), ()=>new Array(n2+1).fill(0))

  for (let i = 1; i <= n1; i++) {
      for (let j = 1; j <= n2; j++) {
          if(A[i-1] ==B[j-1]) {
              dp[i][j] = dp[i-1][j-1] + 1
              max = Math.max(max, dp[i][j])
          }
          
      }
      
  }
  return max
};

let A = [1, 2, 3, 2, 1],
    B = [3, 2, 1, 4, 7]

console.log(findLength(A, B));

