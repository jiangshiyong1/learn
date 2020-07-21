var isBipartite = function (graph) {
    let UNCOLOERD = 0
    let RED = 1
    let GREEN = 2

    let vaild = true
    let n = graph.length
    let color = new Array(n).fill(UNCOLOERD)
    for (let i = 0; i < n && vaild; i++) {
        if (color[i] == UNCOLOERD) {
            dfs(i, RED, graph)
        }
    }

    function dfs(node, c, graph) {
        color[node] = c
        let cNei = c == RED ? GREEN : RED
        for (const neighbor of graph[node]) {
            if (color[neighbor] == UNCOLOERD) {
                dfs(neighbor, cNei, graph)
                if (!vaild) {
                    return
                }
            } else if (color[neighbor] != cNei) {
                vaild = false
                return
            }
        }
    }
    return vaild
};

let graph = [[1, 3], [0, 2], [1, 3], [0, 2]]
isBipartite(graph)