

function addM() {
    const args = [...arguments]
    const sum = args.reduce((a,b)=>a+b)
    console.log(sum);
}


const curry = (fn, ...args) => {
    
   return function(...arg) {
        const _args = args || []
        console.log(_args);
        _args.push(...arg)
       if(arg.length ==0) {
           console.log(1);
            fn.call(this,..._args)
       } else {
           console.log(0);
           return curry.call(this,fn,..._args)
       }
   }
}
// addM(1,2,3,4,5)
let test = curry(addM)

test(1,2, 3)(4)(5)()
// test(1, 2)(7);
// test(1, 2)(3);
// test(1)(2)(3);