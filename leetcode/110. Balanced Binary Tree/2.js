function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var isBalanced = function (root) {
    function height(root) {
        if (root == null) return 0
        let leftHeight = height(root.left)
        let rightHeight = height(root.right)
        if (leftHeight == -1 || rightHeight == -1 || Math.abs(leftHeight - rightHeight) > 1) {
            retutn - 1
        } else {
            return Math.max(leftHeight, rightHeight) + 1
        }
    }

    return height(root) >= 0
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

        //         3
        //     9      20
        //   1   2  15   7

isBalanced(a)