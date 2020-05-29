var LRUCache = function (capacity) {
    this.max = capacity
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let value = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, value)
        return value
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.map.delete(key)
    }
    this.map.set(key, value)
    if (this.map.size > this.max) {
        this.map.delete(this.map.keys().next().value)
    }
};


let cache = new LRUCache(2);

// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1));       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// console.log(cache.get(2));       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// console.log(cache.get(1));       // 返回 -1 (未找到)
// console.log(cache.get(3));       // 返回  3
// console.log(cache.get(4));       // 返回  4

const test = new Map()
test.set(2, 2)
test.set(1, 1)
test.set(3, 3)
// test.delete(2)
test.set(2, 4)

console.log(test.keys());
console.log(test.keys().next());
console.log(test.keys().next().value);
