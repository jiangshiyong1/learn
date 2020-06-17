function throttle(fn, interval) {
    let last = 0

    return function (...args) {
        let context = this
        let now = +new Date()

        if (now - last >= interval) {
            last = now
            fn.call(context, ...args)
        }
    }
}