// Bipartite graph => a graph that can be colored with two colors such that no two adjacent nodes have same color 

// -> any graph with an odd length cycle is not a bipartite graph
// -> if there is a cycle and it has odd number of nodes in the cycle 
// -1 => -1 is to detect the uncolored node
// two colors => 0 and 1

// if any neightbour has the same color of the cur node return false

function checkBiPartite(adj, n) {
    let color = Array(n).fill(-1); // -1 is to detect the uncolored node
    // traverse all the uncolored components of the graph
    for (let i = 0; i < n; i++) {
        if (color[i] == -1) {
            // if any of the component is not biaprtite return false
            if (!bfsCheck(adj, i, color)) return false;
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
function bfsCheck(adj, i, color) {
    let que = [];
    color[i] = 1;
    que.push(i);
    while (que.length) {
        let node = que.shift();
        for (let ele of adj[node]) {
            // color the uncolored node if it is not colored
            if (color[ele] == -1) {
                color[ele] = 1 - color[node];
                que.push(ele)
            }
            // if the neighbour is already colored and has the same color of the cur node return false
            else if (color[ele] === color[node]) {
                return false
            }
        }
    }
    return true;
}