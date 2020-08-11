
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    const node = root
    let lastLeft = root
    const dfs = function (node) {
        if (node.left) {
            lastLeft = node.left
            dfs(node.left)
        }
        if (node.right) {
            lastLeft.left = node.right
        }
        return node
    }
    dfs(node)
    while (node.left) {
        node.right = node.left
        node = node.left
    }
    root.left = null
    console.log(root);
};

const a = new TreeNode(1)
const b = new TreeNode(2)
const c = new TreeNode(3)
const d = new TreeNode(4)
const e = new TreeNode(5)
const f = new TreeNode(6)
a.left = b
b.left = c
b.right = d
a.right = e
e.right = f

flatten(a)