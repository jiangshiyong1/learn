function add(a, b) {
    return a + b;
}

function addM() {
    const args = [...arguments]
    const sum = args.reduce((a,b)=>a+b)
    console.log(sum);
}

function addT (a,b,c) {
    console.log(a +b+c);
}
const curry = (fn, ...arg) => {
        length = fn.length;
    return (...rest) => {
        let _args = [...arg] //拷贝新的all，避免改动公有的all属性，导致多次调用_args.length出错
        _args.push(...rest);
        // console.log(_args.length, length);
        if (_args.length < length) {
            return curry.call(this, fn, ..._args);
        } else {
            return fn.apply(this, _args);
        }
    }
}
// let add2 = curry(add, 2)
// console.log(add2(8));
// add2 = curry(add);
// console.log(add2(2, 8));
// console.log(add2(2)(8));


let test = curry(addT)
test(1, 2)(7);
test(1, 2)(3);
test(1)(2)(3);