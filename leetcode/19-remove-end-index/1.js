

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}


var removeNthFromEnd = function (head, n) {
    const hashTable = {}
    let count = 0
    while (head) {
        // head.index = count
        hashTable[count] = head
        head = head.next
        count++
    }
    console.log(count, n);

    let index = count - n - 1
    console.log(index);

    let prevNode = hashTable[index]
    let node = hashTable[index + 1]


    if (prevNode) {
        prevNode.next = node.next
        node.next = null
    } else {
        node.val = null
        node.next = null
    }



    return hashTable[0]

};

const head = new ListNode(1)
const head1 = new ListNode(2)
head.next = head1

console.log(removeNthFromEnd(head, 2));


