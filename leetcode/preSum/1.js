var subarraysDivByK = (A, K) => {
    let map = { 0: 1 }   // 为了让边界情况也能适用通式
    let preSumModK = 0   // 保存前缀和模K的结果，初始值：0模K=0
    let count = 0        // 计数
    for (let i = 0; i < A.length; i++) {   // 一次遍历做完所有事
      preSumModK = (preSumModK + A[i]) % K // preSumModK的递推关系
      if (preSumModK < 0) preSumModK += K  // 处理preSum为负数的情况，需要加 K
      if (map[preSumModK]) {
        count += map[preSumModK]      // 以前存过，出现次数+1
        map[preSumModK]++
      } else {                    // 新存入，初始值1
        map[preSumModK] = 1
      }
    }
    console.log(map);
    
    return count              // 返回计数结果
  }
let A = [4, 5, 0, -2, -3, 1], K = 5
console.log(subarraysDivByK(A, K));
