/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
    if (root === null) return 0
    let val = root.val
    if (root.left) {
        val += rob(root.left.left) + rob(root.left.right)
    }
    if (root.right) {
        val += rob(root.right.left) + rob(root.right.right)
    }
    return Math.max(val, rob(root.left) + rob(root.right))
};