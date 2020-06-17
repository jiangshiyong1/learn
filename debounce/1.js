function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        let context = this
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            fn.call(context, ...args)
        }, delay)
    }
}

function throttle_debounce(fn, delay) {
    let last = 0, timer = null

    return function (...args) {
        let context = this
        let now = +new Date()
        if (now - last < delay) {
            if (timer) {
                clearTimeout(timer)

            }
            timer = setTimeout(function () {
                last = now
                fn.call(context, ...args)
            }, delay)
        } else {
            last = now
            fn.call(context, ...args)
        }
    }
}