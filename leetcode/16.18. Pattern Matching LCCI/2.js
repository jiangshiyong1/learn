/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
    if (pattern == '') {
        return value === ''
    }
    let a = '', b = '', reg = '', group = 1
    for (let val of pattern.split('')) {
         
        if (val == 'a') {
            if (a) {
                reg += a
            } else {
                reg += '(\\w*)'
                a = '\\' + group++
            }
        } else if (val == 'b') {
            if (b) {
                reg += b
            } else {
                reg += '(\\w*)'
                b = '\\' + group++
            }
        }

    }
    
    const match = new RegExp('^' + reg + '$').exec(value)

    return Boolean(match) && match[1] != match[2]
};

let pattern = "abba", value = "dogcatcatdog"

console.log(patternMatching(pattern, value))
