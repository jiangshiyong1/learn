/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    if(J.length ==0 || S.length ==0){
        return 0
    }
    const ja = J.split('')
    const sa = S.split('')
    let count = 0
    for (let i = 0; i < sa.length; i++) {
        for (let j = 0; j < ja.length; j++) {
            if(sa[i] == ja[j]){
                count ++
            }
            
        }
        
    }
    return count
    
};

let J = "aA", S = "aAAbbbb"
console.log(numJewelsInStones(J, S))