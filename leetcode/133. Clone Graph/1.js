/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

var cloneGraph = function (node) {
    const visited = new Map()
    function clone(node, visited) {
        if (node == null) return node
        if (visited.has(node)) {
            return visited.get(node)
        }
        let cloneNode = new Node(node.val)
        visited.set(node, cloneNode)
        for (let i = 0; i < node.neighbors.length; i++) {
            cloneNode.neighbors.push(clone(node.neighbors[i], visited))
        }
        return cloneNode
    }
    return clone(node, visited)
     
};

