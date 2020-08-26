"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function addM() {
  var args = Array.prototype.slice.call(arguments);
  var sum = args.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
}

var curry = function curry(fn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function () {
    var _args = args || [];

    console.log(_args);

    _args.push.apply(_args, arguments);

    if (arguments.length == 0) {
      console.log(1);
      fn.call.apply(fn, [this].concat(_toConsumableArray(_args)));
    } else {
      console.log(0);
      curry.call.apply(curry, [this, fn].concat(_toConsumableArray(_args)));
    }
  };
}; // addM(1,2,3,4,5)


var test = curry(addM);
test(1, 2, 3)(4)(5)(); // test(1, 2)(7);
// test(1, 2)(3);
// test(1)(2)(3);