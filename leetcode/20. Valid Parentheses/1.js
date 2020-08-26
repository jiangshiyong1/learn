/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = new Map()
    map.set('(', ')')
    map.set('{', '}')
    map.set('[', ']')
    const stack = new Array()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            stack.push(s.charAt(i))
        } else {
            const si = stack.pop()
            if (map.get(si) != s.charAt(i)) {
                stack.push(si)
                stack.push(s.charAt(i))
            }
        }
    }
    return stack.length > 0 ? false : true
};

let s = "{{{[([})]}}}"


console.log(isValid(s));