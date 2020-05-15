const classDecorator = target => {
    const key = Object.getOwnPropertyNames(target.prototype)
    console.log(key);

}

@classDecorator
class A {
    sayName() {
        console.log('calss A');
    }
}

const a = new A()
a.sayName()


const methodDecorator = (target: any, prototypeKey: string, descriptor: PropertyDecorator) => {
    return {
        get() {
            return () => {
                console.log('classc method decorator')
            }
        }
    }
}

// class C {
//     @methodDecorator
//     sayName() {
//         console.log('classC name');

//     }
// }