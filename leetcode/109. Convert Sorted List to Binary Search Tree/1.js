/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    const arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    function buildBST(arr, start, end) {
        if (start > end) return null
        const mid = (start + end) >>> 1
        const node = new TreeNode(arr[mid])
        node.left = buildBST(arr, start, mid - 1)
        node.right = buildBST(arr, mid + 1, end)
        return node
    }
    return buildBST(arr, 0, arr.length - 1)
};