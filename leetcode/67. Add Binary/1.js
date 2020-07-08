/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    let as = a.length >= b.length ? a.split('') : b.split('')
    let bs = a.length < b.length ? a.split('') : b.split('')

    let sam = 0
    let ret = []

    for (let i = as.length - 1; i >= 0; i--) {

        let sum = Number.parseInt(as[i]) + (Number.parseInt(bs[bs.length - 1]) || 0) + sam

        if (bs.length) {
            bs.pop()
        }

        if (sum == 2) {
            ret.push(0)
            sam = 1
        } else if (sum == 3) {
            ret.push(1)
            sam = 1
        } else {
            sam = 0
            ret.push(sum)
        }

    }
    if (sam === 1) {
        ret.push(1)
    }

    return ret.reverse().join('')
};
console.log(addBinary('11', '11'))
