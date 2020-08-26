"use strict";

var repeatedSubstringPattern = function repeatedSubstringPattern(s) {
  var len = s.length;
  var i = 1;

  while (i <= len / 2) {
    if (len % i == 0 && s.slice(0, i).repeat(len / i) == s) {
      return true;
    }

    i++;
  }

  return false;
};

console.log(repeatedSubstringPattern("abcabcabc"));