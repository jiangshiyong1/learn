
function NodeList(key, value) {
    this.prev = null
    this.next = null
    this.value = value
    this.key = key
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.count = 0
    this.hashTable = {}
    this.dummyHead = new NodeList()
    this.dummyTail = new NodeList()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.hashTable[key]) {
        return -1

    } else {
        this.moveToHead(this.hashTable[key])
        return this.hashTable[key].value
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const node = this.hashTable[key]
    if (!node) {
        const newNode = new NodeList(key, value)
        this.hashTable[key] = newNode
        this.addToHead(newNode)
        this.count++
        if (this.count > this.capacity) {
            this.removeTail()
        }
    } else {
        this.hashTable[key].value = value
        this.moveToHead()
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

LRUCache.prototype.moveToHead = function (node) {
    const nodePrev = node.prev
    const nodeNext = node.next
    nodePrev.next = nodeNext
    nodeNext.prev = nodePrev
    this.addToHead(node)
}

LRUCache.prototype.addToHead = function (node) {
    const nodePrev = this.dummyHead
    const nodeNext = this.dummyHead.next
    node.prev = nodePrev
    node.next = nodeNext
    nodePrev.next = node
    nodeNext.prev = node
}

LRUCache.prototype.removeTail = function () {
    const node = this.dummyTail.prev
    const nodePrev = node.prev
    nodePrev.next = this.dummyTail
    this.dummyTail.prev = nodePrev
    delete this.hashTable[node.key]
    this.count--
}


let cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1));       // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4
