function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const hasPathSum = (root, sum) => {
    if (root == null) return false
    if (root.left == null && root.right == null) {
        return sum - root.val == 0
    }
    return hasPathSum(root.left, sum - root.val) ||
        hasPathSum(root.right, sum - root.val)
}

let a= new TreeNode(5)
let b= new TreeNode(4)
let c= new TreeNode(8)
let d= new TreeNode(11)
let e= new TreeNode(13)
let f= new TreeNode(4)
let g= new TreeNode(7)
let h= new TreeNode(2)
let i= new TreeNode(1)

a.left = b
a.right = c
b.left = d
c.left = e
c.right = f
d.left = g
d.right = h
f.right = i

hasPathSum(a, 22)
