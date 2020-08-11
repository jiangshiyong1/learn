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
var maxDepth = function (root) {
    let queue = []
    queue.push(root)
    let ans = 0
    while (queue.lenght == 0) {
        let size = queue.length
        while (size > 0) {
            let node = queue.pop()
            if (node.left != null) {
                queue.push(node.left)
            }
            if (node.right != null) {
                queue.push(node.right)
            }
            size--
        }
        ans++
    }
    return ans
};