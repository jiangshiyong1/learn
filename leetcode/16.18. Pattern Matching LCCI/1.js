/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
function patternMatching(pattern, value) {
    if (pattern == '') {
        return value === ''
    }

    let group = 1
    let a = '', b = '', reg = ''
    for (const char of pattern.split('')) {
        if (char === 'a') {
            if (a) {
                reg += a
            } else {
                reg += '(\\w*)'
                a = '\\' + group++
            }
        } else if (char === 'b') {
            if (b) {
                reg += b
            } else {
                reg += '(\\w*)'
                b += '\\' + group++
            }
        }

    }

    const match = new RegExp('^' + reg + '$').exec(value)

    
    return Boolean(match) && match[1] != match[2]

};

let pattern = "abba", value = "dogcatcatdog"

patternMatching(pattern, value)



