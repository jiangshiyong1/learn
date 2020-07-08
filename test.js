
let num = 2
const path = num === 1 ? {} : { publicPath: './' }

const obj = {
    as: 23,
    ...path
}

console.log(obj);
