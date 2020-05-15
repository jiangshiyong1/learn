// function Promise(excutor){
//     const self = this
//     self.onResolvedCallbacks = []

//     function resolve (value){
//         setTimeout(() => {
//             self.data = value
//             self.onResolvedCallbacks.forEach(fn => {
//                 fn()
//             });
//         });
//     }

//     excutor(resolve)
// }

// Promise.prototype.then = function(onResolved) {
//     const self = this

//     return new Promise(resolve =>{
//         self.onResolvedCallbacks.push(function (){
//             var result = onResolved(self.data)
//             if(result instanceof Promise){
//                 result.then(resolve)
//             } else {
//                 resolve(result)
//             }
//         })
//     })
// }

function Promise(excutor) {
  const self = this
  self.value = ''
  self.onResolveCallbacks = []

  function resolve(value) {
    setTimeout(() => {
      self.data = value
      self.onResolveCallbacks.forEach(fn => {
        fn()
      });
    });
  }

  excutor(resolve)
}

Promise.prototype.then = function (onResolve) {
  return new Promise(function (resolve, reject) {
    self.onResolveCallbacks.push(function () {
      const x = onResolve(self.data)
      if (x instanceof Promise) {
        x.then(resolve)
      } else {
        resolve(x)
      }
    })
  })
}

new Promise(resolve => {
  setTimeout(() => {
    resolve(1)
  }, 500)
})
  .then(res => {
    console.log(res)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2)
      }, 500)
    })
  })
  .then(console.log)
