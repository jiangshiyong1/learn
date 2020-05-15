const liLei = {
    name: 'lilei',
    age: 28,
    habits: ['coding', 'hiking', 'running']
}

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let copyObj = {}
    if (obj.constructor === Array) {
        copyObj = []
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyObj[key] = deepCopy(obj[key])
        }
    }
    return copyObj
}

const cpObj = deepCopy(liLei)
liLei.age = 100
console.log(liLei);

console.log(cpObj);
