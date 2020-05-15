// const promiseD = new Promise((resolve, reject) => {
//     // reject('no')
//     resolve('yes')
// })
// promiseD.then(null, reason => {
//     console.log(reason);

// }).catch(error => {
//     console.log(error) // no
// })



// function fetch(callback) {
//     return new Promise((resolve, reject) => {
//         throw Error('用户不存在')
//     })
// }

// fetch().then(result => {
//     console.log('请求处理', result) // 永远不会执行
// },reason =>{
//     console.log(reason);

// })


// function fetch(callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//              throw Error('用户不存在')
//         })
//     })
// }



// fetch().then(result => {
//     // console.log('请求处理', result) // 永远不会执行
// }).catch(error => {
//     // console.log('请求处理异常', error) // 永远不会执行



// function* generatorB(count) {
//     console.log(count)
//     const result = yield 5
//     console.log(result * count)
// }
// const genB = generatorB(2)
// const it = genB.next() // 2
// console.log(it)
// const genBValue = genB.next(7) // 14
// console.log(genBValue)


const successRequest = () => Promise.resolve('a')
const failRequest = () => Promise.reject('b')

class Action {
    async successReuqest() {
        const result = await successRequest()
        console.log('successReuqest', '处理返回值', result) // successReuqest 处理返回值 a
    }

    async failReuqest() {
        const result = await failRequest()
        console.log('failReuqest', '处理返回值', result) // 永远不会执行
    }

    async allReuqest() {
        const result1 = await successRequest()
        console.log('allReuqest', '处理返回值 success', result1) // allReuqest 处理返回值 success a
        const result2 = await failRequest()
        console.log('allReuqest', '处理返回值 success', result2) // 永远不会执行
    }
}

const action = new Action()
try {
    action.successReuqest()
    action.failReuqest()
    action.allReuqest()
} catch (error) {
    console.log(11)
}


