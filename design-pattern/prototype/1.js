function deepClone(obj) {
    if (typeof obj !== 'object' || typeof obj === null) {
        return obj
    }

    let newObj = {}
    if (obj.constructor === Array) {
        newObj = []
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
    }

    return newObj
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

