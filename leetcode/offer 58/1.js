/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    const arr1 = s.split('')
    const arr2 = arr1.splice(n,arr1.length)
    return [...arr2,...arr1].join('')
};

var reverseLeftWords = function(s, n) {
   
    return s.slice(n) + s.slice(n,s.length) 
};