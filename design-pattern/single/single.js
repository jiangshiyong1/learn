class SingleDog {
    show (){
        console.log('我是一个单例对象');
        
    }

    static getInstance(){
        if(!SingleDog.instance) {
            SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
    }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

console.log(s1 === s2);

function singleSuper (fn) {
    let instance 
    return function () {
        if(!instance) {
            instance = new fn()
        }
        return instance 
    }
}

const single = singleSuper(SingleDog)
const s3 = single()
const s4= single()
console.log(s3 === s4);
