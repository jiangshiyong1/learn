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
var minDepth = function (root) {
    if (root === null) return 0
    let queue = [root]
    let depth = 1
    while (queue.length > 0) {
        let size = queue.length
        while (size > 0) {
            const cur = queue.shift()
            if (cur.left == null && cur.right == null) {
                return depth
            }
            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        depth++
    }


};