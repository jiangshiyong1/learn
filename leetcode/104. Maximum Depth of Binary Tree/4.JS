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
    let queue = []
    let ans = 0
    queue.push(root)
    while (queue.length != 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            if (node.left != null) queue.push(node.left)
            if (node.right != null) queue.push(node.right)
        }
        ans++
    }
    return ans
};

let a = new TreeNode(3)
let b = new TreeNode(9)
let c = new TreeNode(20)
let d = new TreeNode(15)
let e = new TreeNode(7)
let f = new TreeNode(1)
let g = new TreeNode(2)
a.left = b
a.right = c
c.left = d
c.right = e
b.left = f
b.right = g

console.log(maxDepth(a))