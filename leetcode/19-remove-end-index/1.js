

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


// var removeNthFromEnd = function (head, n) {
//     const hashTable = {}
//     let dummyHead = new ListNode(0)
//     let retNode = dummyHead
//     dummyHead.next = head
//     let count = 0
//     while (dummyHead) {
//         hashTable[count] = dummyHead
//         dummyHead = dummyHead.next
//         count++
//     }
//     let index = count - n - 1
//     let prevNode = hashTable[index]
//     let node = hashTable[index + 1]
//     prevNode.next = node.next
//     node.next = null
//     return retNode.next

// };

var removeNthFromEnd = function (head, n) {

    const dummyHead = new ListNode(0)

    dummyHead.next = head

    let q = dummyHead

    let s = dummyHead


    // 快指针先走
    while (n--) {
        q = q.next
    }

    // 一起走
    while (q.next) {
        q = q.next
        s = s.next
    }

    s.next = s.next.next


    return dummyHead.next
};

const head = new ListNode(1)
const head1 = new ListNode(2)
head.next = head1

console.log(removeNthFromEnd(head, 2));


