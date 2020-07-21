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
 * @return {number}
 */
var kthToLast = function (head, k) {
    let left = head, right = head
    while(k>0) {
        right = right.next
        k--
    }

    while(right) {
        right = right.next
        left = next.next
    }

    return left.val
};