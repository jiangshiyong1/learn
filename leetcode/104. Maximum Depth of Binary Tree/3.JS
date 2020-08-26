
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;

}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
};

let a = new TreeNode(3)
let b = new TreeNode(9)
let c = new TreeNode(20)
let d = new TreeNode(15)
let e = new TreeNode(7)

a.left = b
a.right = c
c.left = d
c.right = e

console.log(maxDepth(a))
