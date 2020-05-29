const fs = require('fs')

function readFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf8', function (err, data) {
            // console.log(data, err);

            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

function* gen() {
    const a = yield readFile('./1.txt')
    console.log(a);

    const b = yield readFile('./2.txt')
    console.log(b);

    return yield readFile('./2.txt')

}


function co(it) {
    return new Promise(function (resolve, reject) {
        (function loop(val) {
            let { value, done } = it.next(val)
            console.log(value, done);

            if (!done) {
                value.then(function (data) {
                    loop(data)
                }, reject)
            } else {
                resolve(value)
            }
        })()


    })
}

co(gen()).then(data => console.log(data))
