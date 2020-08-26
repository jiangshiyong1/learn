/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const stack = new Array()
    const arr = s.split(' ')
    for (let i = arr.length -1; i >= 0; i--) {
        if(arr[i] != '') {
            stack.push(arr[i])
        }
    }
    return stack.join(" ")
};

console.log(reverseWords('a good   example'))