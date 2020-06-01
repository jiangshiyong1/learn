/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0)
    let temp = dummyHead
    let add = 0
    let sum = 0

    while (l1 || l2) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
        temp.next = new ListNode(sum % 10)
        temp = temp.next
        add = sum > 1 ? 1 : 0
        l1 = l1.next ? l1.next : null
        l2 = l2.next ? l2.next : null

    }

    add && (temp.next = new ListNode(add))

    return dummyHead.next
};