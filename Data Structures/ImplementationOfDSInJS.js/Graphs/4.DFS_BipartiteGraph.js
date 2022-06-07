// Bipartite graph => a graph that can be colored with two colors such that no two adjacent nodes have same color 

// -> any graph with an odd length cycle is not a bipartite graph
// -> if there is a cycle and it has odd number of nodes in the cycle 

function checkBiPartite(adj, n) {
    let color = Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        if (color[i] == -1) {
            // if any of the component is not biaprtite retur false
            if (!dfsCheck(adj, i, color)) return false;
        }
    }
    return true
}

/**
 * 
 * @param {*} adj  - adjacency list
 * @param {*} i - current node
 * @param {*} color - color array
 * @returns 
 */
function dfsCheck(adj, i, color) {
    if (color[i] === -1) color[i] = 1;
    for (let ele of adj[i]) {
        // color the uncolored neighbours with the color opp to its parent
        if (color[ele] == -1) {
            color[ele] = 1 - color[i];
            if (!dfsCheck(adj, ele, color)) return false;
        }
        // if the neighbour is already colored and has the same color of the cur node return false
        else if (color[ele] === color[i]) {
            return false
        }
    }
    return true;
}