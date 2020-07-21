// function runStack(n) {
//     if (n === 0) return 100;
//     return runStack(n - 2);
// }
// runStack(6)

// function runStack(n, result = 100) {
//     if (n === 0) return result;


//     return runStack(n - 2, result);
// }
// runStack(6, 100) 

// function f(x) {
//     if (x === 1) return 1;
//     return f(x - 1);
// }

// f(3)

// function f(x) {
//     if (x === 1) return 1;
//     return 1 + f(x - 1);
// }
// f(3)

// setTimeout(() => {
//     setTimeout(() => {
//       setTimeout(() => {
//         setTimeout(() => {
//           setTimeout(() => {
//             console.log(11);
//           }, 0)        
//         }, 0)      
//       }, 0)
//     }, 0)
//   },0)


// console.log(a);
// var a = 0
// var a = function() {
//   console.log('function');
// }


// function showName() { console.log('极客邦'); } showName(); function showName() { console.log('极客时间'); } showName();

// showName()
// var showName = function () { console.log(2) }
// function showName() { console.log(1) }

// var bar = {
//   myName: "time.geekbang.com",
//   printName: function () {
//     // console.log(this);
//     console.log(this.myName)
//   }
// }
// function foo() {
//   let myName = "极客时间"
//   return bar.printName
// }
// var myName = "极客邦"
// let _printName = foo()
// _printName()
// bar.printName()

// console.log(Math.floor(1.6));

let userInfo = {
    name: "jack.ma",
    age: 13, 
    sex: 'male',
    updateInfo: function () {
        const self = this
        //模拟xmlhttprequest请求延时	
        setTimeout(function () {
            self.name = "pony.ma"
            self.age = 39
            this.sex = 'female'
        }, 100)
    }
}
userInfo.updateInfo()

console.log(userInfo);

