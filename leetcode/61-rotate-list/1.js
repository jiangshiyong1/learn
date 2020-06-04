class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class LinkedList {
    constructor(list) {
        this.head = null
        this.size = 0
        list.forEach(val => this.push(val))
    }
    // 在尾部追加元素
    push(val) {
        let node = new ListNode(val)
        let current = null
        if (!this.head) {
            this.head = node
        } else {
            current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    // 查看链表
    toString() {
        if (!this.head) return this.head
        let str = this.head.val
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            str += `->${current.val}`
            current = current.next
        }
        return str
    }
}


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return head;
    let dummuyNode = new ListNode(0)
    dummuyNode.next = head
    let cur = head
    let size = 1

    while (cur.next) {
        cur = cur.next
        size++
    }

    let num = k % size
    let targetNode = head

    for (let i = 0; i < num; i++) {
        let node = dummuyNode.next
        
        // 找到倒数第二个节点
        while (node.next && node.next.next) {
            
            node = node.next
            targetNode = node
        }
        console.log(targetNode);
        
        // 获取最后一个节点
        let lastNode = targetNode.next

        //将最后一个节点放到最前面
        lastNode.next = dummuyNode.next
        dummuyNode.next = lastNode


        // 删除最后一个节点
        targetNode.next = null

    }
    
    return dummuyNode.next


};

let list = [0,1,2], k = 4
let head = new LinkedList(list).head
console.log(rotateRight(head, k), '结果')
