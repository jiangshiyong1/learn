const names = ['lilei', 'hanmeimei', 'xiaoming']
console.log(names.some(name => name === 'lilei'))
console.log(names.includes('lilei'))

var num = [1, 2, 3, 4, 5, 0];
var isZeroFree = num.every(e => e > 0);
if (!isZeroFree) {
    console.log("0 present in array");
}
console.log(isZeroFree);
