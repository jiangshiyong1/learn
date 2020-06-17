
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) {
        return "[]";
    }

    let res = "";
    let node = root;
    const queue = [node];

    while (queue.length) {
        console.log('-----------');
        console.log(queue);

        const front = queue.shift();
        if (front) {
            res += `${front.val},`;
            queue.push(front.left);
            queue.push(front.right);
        } else {
            res += "#,";
        }
    }

    res = res.substring(0, res.length - 1); // 去掉最后一个逗号

    return `[${res}]`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    // if (data.length <= 2) {
    //     return null;
    // }

    const nodes = data.substring(1, data.length - 1).split(",");
    const root = new TreeNode(parseInt(nodes[0]));
    nodes.shift();

    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        // 第一个是左节点，节点为空，直接跳过
        const leftVal = nodes.shift();
        if (leftVal !== "#") {
            node.left = new TreeNode(leftVal);
            queue.push(node.left);
        }
        // 第二个是右节点，节点为空，直接跳过
        const rightVal = nodes.shift();
        if (rightVal !== "#") {
            node.right = new TreeNode(rightVal);
            queue.push(node.right);
        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


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
