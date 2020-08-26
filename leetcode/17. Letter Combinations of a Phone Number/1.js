/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length ==0) return []
    const map = {
        2: ['a','b','c'],
        3:['d','e','f'],
        4: ['g','h','i'],
        5:['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9:['w','x','y','z']
    }
    const temp = []
    for (let i = 0; i < digits.length; i++) {
       temp.push(map[digits.charAt(i)])
        
    }
   let ans =temp.reduce((a,b) =>{
    let containter = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            containter.push(a[i] + b[j])
        }
        
    }
    return containter
   })
  return ans
};

letterCombinations('23')