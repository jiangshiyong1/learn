"use strict";

var letterCombinations = function letterCombinations(digits) {
  if (digits.length == 0) return [];
  var map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  var queue = [];
  queue.push('');

  for (var i = 0; i < digits.length; i++) {
    // bfs的层数，即digits的长度
    var levelSize = queue.length; // 当前层的节点个数

    console.log(queue);

    for (var j = 0; j < levelSize; j++) {
      // 逐个让当前层的节点出列
      var curStr = queue.shift(); // 出列

      var letters = map[digits[i]];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = letters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var l = _step.value;
          queue.push(curStr + l); // 生成新的字母串入列
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }

  return queue; // 队列中全是最后一层生成的字母串
};

console.log(letterCombinations('234'));