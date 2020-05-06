function* gen() {
    const a = yield 1
    const b = yield 2
    const c = yield 3
    console.log(a, b, c);

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

auto(gen)