/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
    const stack = []
    for (let i = 0; i < S.length;) {
        let curLevel = 0
        while (i < S.length && S[i] == '-') {
            i++
            curLevel++
        }
        const start = i
        while (i < S.length && S[i] != '-') {
            i++
        }
        const curNode = new TreeNode(S.slice(start, i))
        if (stack.length == 0) {
            stack.push(curNode)
            continue
        }
        while (stack.length > curLevel) {
            stack.pop()
        }

        if (stack[stack.length - 1].left) {
            stack[stack.length - 1].right = curNode
        } else {
            stack[stack.length - 1].left = curNode
        }
        stack.push(curNode)
    }
    return stack[0]
};