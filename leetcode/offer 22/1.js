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
var getKthFromEnd = function(head, k) {
    let left = head,right = head

    while(k>0) {
        right = right.next
        k--
    }

    while (right) {
        right = right.next
        left = left.next
    }
    return left
};