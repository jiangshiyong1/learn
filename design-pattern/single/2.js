class SingleDog {
    show() {
        console.log('我是一个单例对象');

    }
    constructor(name) {
        this.name = name
    }

    static getInstance() {
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
    }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

console.log(s1 === s2);

function singleSuper(fn) {
    let instance
    return function (...args) {
        if (!instance) {
            instance = new fn(...args)
        }
        return instance || (instance = new fn(...args))
    }
}

const single = singleSuper(SingleDog)
const s3 = single(3)
const s4 = single(2)
console.log(s3 === s4);
console.log(s3.name);
console.log(s4.name);
