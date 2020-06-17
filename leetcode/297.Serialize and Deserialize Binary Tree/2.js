function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var serialize = function (root) {
    if(!root) {
        return '[]'
    }
    let queue = [root]
    let res = `${root.val},`
 
    while (queue.length) {
        let node = queue.shift()
        if (node) {
            let leftNode = node.left
            let rightNode = node.right

            queue.push(leftNode)
            queue.push(rightNode)
            res += `${leftNode != null ? leftNode.val : '#'},`
            res += `${rightNode != null ? rightNode.val : '#'},`
        }
    }
    res = res.substring(0, res.length - 1)
    return `[${res}]`
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length <= 2) {
        return null
    }
    const nodes = data.substring(1, data.length - 1).split(',')
    let root = new TreeNode(nodes[0])
    nodes.shift()

    let queue = [root]

    while (queue.length) {
        let node = queue.shift()
        let leftVal = nodes.shift()
        if (leftVal !='#') {
            let leftNode = new TreeNode(leftVal)
            node.left = leftNode
            queue.push(leftNode)
        }
        let rightVal = nodes.shift()
        if (rightVal !='#') {
            let rightNode = new TreeNode(rightVal)
            node.right = rightNode
            queue.push(rightNode)
        }
    }

    return root

};

















const a = new TreeNode(1)
const b = new TreeNode(2)
const c = new TreeNode(3)
const d = new TreeNode(4)
const e = new TreeNode(5)
a.left = b
a.right = c
c.left = d
c.right = e

console.log(serialize(a));
var str = '[1,2,3,#,#,4,5,#,#,#,#]'

console.log(deserialize(str))
