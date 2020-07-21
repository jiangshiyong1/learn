/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let res = '';
    let opened = 0;
    for(let c of S) {
      if(c === '(' && opened ++ > 0) res += c;
      if(c === ')' && opened -- > 1) res += c;
    }
  
    return res;
  };
  removeOuterParentheses("(()())(())(()(()))")
