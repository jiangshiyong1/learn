var subarraysDivByK = (A, K) => {
    let preSumModK = 0
    let map = { 0: 1 }
    let count = 0
    for (let i = 0; i < A.length; i++) {
        preSumModK = (preSumModK + A[i]) % K
        if (preSumModK < 0) preSumModK += K
        if (map[preSumModK]) {
            count += map[preSumModK]
            map[preSumModK]++
        } else {
            map[preSumModK] = 1
        }
    }
    console.log(map);
    
    return count
}
let A = [4, 5, 0, -2, -3, 1], K = 5
console.log(subarraysDivByK(A, K));