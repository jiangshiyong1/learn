function deepClone(obj) {
    if (typeof obj != 'object' || obj === null) return obj
    let copy = {}
    if (Array.isArray(copy)) {
        copy = []
    }
    for (const item in obj) {
        if (obj.hasOwnProperty(item)) {
            copy[item] = deepClone(item)
        }
    }
    return copy
}

let arr = {
    a: 1,
    b: { c: 2 },
    d: [1, 2, 3],
    e: function () {
        console.log(4);
    }
}

const copy = deepClone(arr)
copy.b.c = 10
console.log(arr);
console.log(copy);


console.log(typeof deepClone);

