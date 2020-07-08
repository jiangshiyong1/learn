/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let cur = 0
    let ans = false
    const loopBst = function(node) {
        if(!node) return
        cur += node.val
        console.log(cur)
        if(cur == sum) {
            ans = true
        }
        loopBst(node.left)
        cur -= node.left ? node.left.val : 0
        loopBst(node.right)
        cur -= node.right ? node.right.val : 0

    }
    loopBst(root)
    return ans
};