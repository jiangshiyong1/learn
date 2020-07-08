function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

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

console.log(recoverFromPreorder(
    "1-2--3--4-5--6--7"));


const a = new TreeNode(1)
const b = new TreeNode(2)
const c = new TreeNode(3)
const d = new TreeNode(4)
const e = new TreeNode(5)
const f = new TreeNode(6)
const g = new TreeNode(7)

a.left = b
a.right = e
b.left = c
b.right = d
e.left = f
e.right = g
