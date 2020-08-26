"use strict";

var _this = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function add(a, b) {
  return a + b;
}

function addM() {
  var args = Array.prototype.slice.call(arguments);
  var sum = args.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
}

function addT(a, b, c) {
  console.log(a + b + c);
}

var curry = function curry(fn) {
  for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arg[_key - 1] = arguments[_key];
  }

  length = fn.length;
  return function () {
    var _args = [].concat(arg); //拷贝新的all，避免改动公有的all属性，导致多次调用_args.length出错


    _args.push.apply(_args, arguments); // console.log(_args.length, length);


    if (_args.length < length) {
      return curry.call.apply(curry, [_this, fn].concat(_toConsumableArray(_args)));
    } else {
      return fn.apply(_this, _args);
    }
  };
}; // let add2 = curry(add, 2)
// console.log(add2(8));
// add2 = curry(add);
// console.log(add2(2, 8));
// console.log(add2(2)(8));


var test = curry(addT);
test(1, 2)(7);
test(1, 2)(3);
test(1)(2)(3);