/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if(num1 == '0' || num2 == '0') return '0'
    let ans = '0'
    for (let i = num1.length - 1; i >= 0; i--) {
        let temp = new Array(num1.length - 1 - i).fill(0)
        let add = 0
        for (let j = num2.length - 1; j >= 0; j--) {
            let mult = +num1.charAt(i) * +num2.charAt(j) + add
            temp.push(mult % 10)
            add = Math.floor(mult / 10)
        }
        if (add > 0) {
            temp.push(add)
        }
        ans = addTwoStr(temp.reverse().join(""), ans)
    }



    function addTwoStr(num1, num2) {
        let m = num1.length - 1, n = num2.length - 1
        let count = 0
        const res = []
        while (m >= 0 || n >= 0) {
            const sum = (m >= 0 ? +num1.charAt(m) : 0) + (n >= 0 ? +num2.charAt(n) : 0) + count
            res.push(sum % 10)
            count = Math.floor(sum / 10)
            m--
            n--
        }
        if (count != 0) {
            res.push(count)
        }

        return res.reverse().join("")
    }
    return ans
};

console.log(multiply("0", "450"));