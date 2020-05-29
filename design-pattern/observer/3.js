class EventEmitter {
    constructor() {
        this.handlers = []
    }

    on(eventName, cb) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = []
        }
        this.handlers[eventName].push(cb)
    }

    emit(eventName, ...args) {
        if (this.handlers[eventName]) {
            this.handlers[eventName].forEach(cb => {
                cb(...args)
            })
        }
    }
    off(eventName, cb) {
        const cbs = this.handlers[eventName]
        const index = cbs.indexOf(cb)
        if (index !== -1) {
            cbs.splice(i, 1)
        }
    }

    once(eventName, cb) {
        const wrapper = (...args) => {
            cb.apply(...args)
            this.off(eventName, wrapper)
        }
        this.on(eventName, wrapper)
    }
}