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

function* generatorB(count) {
    console.log(count)
    const result = yield 5
    console.log(result * count)
}
const genB = generatorB(2)
const it = genB.next() // 2
console.log(it)
const genBValue = genB.next(7) // 14
console.log(genBValue)


