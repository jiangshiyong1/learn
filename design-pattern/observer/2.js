function Observer(target) {
    if (target && typeof target === 'object') {
        Object.keys(target).forEach(key => {
            defineReactive(target, key, target[key])
        })
    }
}

function defineReactive(target, key, val) {
    const dep = new Dep()
    Observer(val)
    Object.defineProperty(target, ksy, {
        enumerable: true,
        configurable: false,
        get: function () {
            return val
        },
        set: function (value) {
            val = value
            dep.notify()
        }
    })
}

class Dep {
    constructor() {
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    notify() {
        this.subs.forEach(sub => {
            sub.updata()
        })
    }
}