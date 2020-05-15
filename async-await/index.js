function* gen() {
    const a = yield 1
    const b = yield 2
    const c = yield 3
    console.log(a, b, c);
    return 'success'

}

function auto(gen) {
    const it = gen()

    !function loop(value) {
        const res = it.next(value)
        if (!res.done) {
            loop(res.value)
        }
    }()

}

function co(it) {
    return new Promise(function (resolve, reject) {
        function next(d) {
            let { value, done } = it.next(d);
            if (!done) {
                value.then(function (data) { // 2,txt
                    next(data)
                }, reject)
            } else {
                resolve(value);
            }
        }
        next();
    });
}
// co(r()).then(function (data) {
//     console.log(data)
// })

auto(gen)