// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(10)
//     }, 500);
// })

// const p2 = p1.then(function onFufilled(data) {
//     console.log(data);

//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             resolve(data + 10)
//         }, 500);
//     })

// }, function onRejected(err) {
//     console.log(err);

// })

// p2.then(function (data) {
//     console.log(data)
// })


const Promise = require('./myPromise')
let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(10)
    }, 2000);
})

let p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(20)
    }, 1000);
})

Promise.race([p1, p2]).then(function (data) {
    console.log(data);

})