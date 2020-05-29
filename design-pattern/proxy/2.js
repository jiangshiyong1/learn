function addAll() {
    console.log('进行一次计算');

    const arg = [...arguments]
    let result = 0
    for (let key in arg) {
        result += arg[key]
    }
    return result
}


const proxyAddAll = (function () {
    let resultCache = {}
    
    
    return function () {
        let args = [...arguments]
        console.log(resultCache);
        if (resultCache[args]) {
            return resultCache[args]
        } else {
            return resultCache[args] = addAll(...args)
        }
    }
})()


// console.log(addAll(1, 2, 3, 4, 5));
console.log(proxyAddAll(1, 2, 3, 4, 5));
console.log(proxyAddAll(1, 2, 3, 4, 5))
console.log(proxyAddAll(1, 2, 3, 4, 5))
