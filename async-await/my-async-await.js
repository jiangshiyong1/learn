const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

// async function test() {
//     const data = await getData()
//     console.log(data);
//     const data2 = await getData()
//     console.log(data2)
//     return 'success'
// }

// test()

function* testG() {
    const data = yield getData()
    console.log(data);
    const data2 = yield getData()
    console.log(data2);
    return 'success'
}

// const gen = testG()

// const dataPromise = gen.next()
// console.log(dataPromise);
// dataPromise.value.then(value1 =>{
//     const data2Promise = gen.next(value1)

//     data2Promise.value.then(value2 =>{
//         gen.next(value2)
//     })
// })

function asyncToGenerator(generateFunc) {
    return function () {
        const gen = generateFunc.call(this, ...arguments)
        return new Promise((resolve, reject) => {
            function step(key, arg) {
                let generateResult
                try {
                    generateResult = gen[key](arg)
                } catch (error) {
                    reject(error)
                }
                const { value, done } = generateResult
                if (done) {
                    resolve(value)
                } else {
                    Promise.resolve(
                        // 这个value对应的是yield后面的promise
                        value
                    ).then(val => step('next', val), err => step('throw', err))
                }
            }
            step('next')
        })
    }
}

asyncToGenerator(testG)(1, 2).then(val => {
    console.log(val);

})
