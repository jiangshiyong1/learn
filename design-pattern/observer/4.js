export default class EventBus {
    constructor() {
        this.handlers = []
    }

    on(name, handler) {
        if (!this.handlers[name]) {
            this.handlers[name] = []
        }
        this.handlers[name].push(handler)
    }

    emit(name, ...args) {
        if (this.handlers[name]) {
            this.handlers[name].forEach(cb => {
                cb(...args)
            });
        }
    }

    off(name, handler) {
        if (this.handlers[name]) {
            this.handlers[name].forEach((i, cb) => {
                if (cb === handler) {
                    this.handlers[name].splice(i, 1)
                }
            })
        }
    }

    once(name, handler) {
        const wapper = (...args) => {
            handler.apply(...args)
            this.off(name, wapper)
        }
        this.on(name, wapper)
    }
}