class Storage {
    constructor() {
        this.cache = {}
    }
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage()
        }
        return Storage.instance
    }
    getItem(key) {
        return this.cache[key]
    }
    setItem(key, value) {
        this.cache[key] = value
    }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()

storage1.setItem('name', '李雷')
// 李雷
console.log(storage1.getItem('name'))
// 也是李雷
console.log(storage2.getItem('name'));

// 返回true
console.log(storage1 === storage2);