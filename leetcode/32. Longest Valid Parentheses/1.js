/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let maxLen = 0
    const stack = [-1]
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c == '(') {
            stack.push(i)
            continue
        }
        stack.pop()
        if (stack.length == 0) {
            stack.push(i)
        } else {
            maxLen = Math.max(maxLen, i - stack[stack.length - 1])
        }

    }
    return maxLen

};

let s = '()(())'
console.log(longestValidParentheses(s));

