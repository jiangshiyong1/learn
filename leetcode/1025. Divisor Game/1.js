/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
    let f = []
    f[1] = false
    f[2] = true
    for (let i = 3; i <= N; i++) {
        for (let j = 1; j < i; j++) {
            if ((i % j) == 0 && !f[i - j]) {
                f[i] = true;
                break;
            }
        }

    }
    return f[N] || false
};

console.log(divisorGame(4))