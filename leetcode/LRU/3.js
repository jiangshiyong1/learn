class NodeList {
    constructor(key, value) {
        this.value = value
        this.key = key
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity

        this.dummyHeaad = new NodeList()
        this.dummyTail = new NodeList()

        this.dummyHeaad.next = this.dummyTail
        this.dummyTail.prev = this.dummyHeaad

        this.hashTable = {}

        this.count = 0

    }
    get(key) {
        const node = this.hashTable[key]
        if (node) {
            this.moveToHead(node)
            return node.value
        } else {
            return -1
        }
    }

    put(key, value) {
        const node = new NodeList(key, value)
        if (this.hashTable[key]) {
            this.hashTable[key].value = value
            this.moveToHead(this.hashTable[key])
        } else {
            this.hashTable[key] = node
            this.addToHead(node)
            this.count++
            if (this.count > this.capacity) {
                this.removeTail()
            }
        }
    }

    removeNode(node) {
        const prevNode = node.prev
        const nextNode = node.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
    }

    moveToHead(node) {
        this.removeNode(node)
        this.addToHead(node)
    }

    addToHead(node) {
        const oldNode = this.dummyHeaad.next
        this.dummyHeaad.next = node
        node.prev = this.dummyHeaad
        node.next = oldNode
        oldNode.prev = node
    }


    removeTail() {
        const node = this.dummyTail.prev
        delete this.hashTable[node.key]
        const prevNode = node.prev
        prevNode.next = this.dummyTail
        this.dummyTail.prev = prevNode
        this.count--
    }

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

