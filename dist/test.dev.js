"use strict";

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
// let userInfo = {
//     name: "jack.ma",
//     age: 13, 
//     sex: 'male',
//     updateInfo: function () {
//         const self = this
//         //模拟xmlhttprequest请求延时	
//         setTimeout(function () {
//             self.name = "pony.ma"
//             self.age = 39
//             this.sex = 'female'
//         }, 100)
//     }
// }
// userInfo.updateInfo()
// console.log(userInfo);
// function bar() {
//     var myName = "极客世界"
//     let test1 = 100
//     if (1) {
//         let myName = "Chrome浏览器"
//         console.log(test)
//     }
// }
// function foo() {
//     var myName = "极客邦"
//     let test = 2
//     {
//         let test = 3
//         bar()
//     }
// }
// var myName = "极客时间"
// let myAge = 10
// let test = 1
// foo()
// const combineReducers = reducers => (state = {}, action) => {
//     let currentState = {};
//     for (let key in reducers) {
//         currentState[key] = reducers[key](state[key], action);
//     }
//     console.log(currentState);
//     return currentState;
// };
// var reducers = {
//     todos: (state, action) => { // 此处的 state 参数是全局 state.todos属性
//     },
//     activeFilter: (state, action) => { // 拿到 state.activeFilter 作为此处的 state
//     }
// }
// var rootReducer = combineReducers(reducers)
// console.log(rootReducer);
function add1(str) {
  return str + 1;
}

function add2(str) {
  return str + 2;
}

function add3(str) {
  return str + 3;
} // let newstr = add3(add2(add1("abc"))) //"abc123"
// console.log(newstr);
// function compose(...funcs) {
//     return funcs.reduce(
//         // (a, b) => (...args) => a(b(...args))
//         function (a, b) {
//             return function (...args) {
//                 return a(b(...args))
//             }
//         }
//     );
// }


function compose() {
  for (var _len = arguments.length, func = new Array(_len), _key = 0; _key < _len; _key++) {
    func[_key] = arguments[_key];
  }

  return func.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

var newaddfun = compose(add3, add2, add1);
var newstr = newaddfun("abc"); //"abc123"

console.log(newstr);