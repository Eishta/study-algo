// Apraoch -> all the children or neighbours of a node should be unvisited except the parent, if any other neighbour is visited and its not the parent , then there is a cycle
// we push the node and also its parent
// here we do the recursive implementation of the approach as it is DFS
/**
 * 
 * @param {*} v -> number of vertices
 * @param {*} adj -> adjacency list
 * @returns 
 */
function isCycle(v, adj) {
    let visited = {};
    for (let i = 0; i < v; i++) {
        if (!visited[i])
           if(checkCycle(i, -1, adj, visited)) return true;
    }
}

/**
 * 
 * @param {*} node -> the current node
 * @param {*} par -> parent of the node
 * @param {*} adj -> adjacency list
 * @param {*} visited -> the map to track which node is already visited
 */
function checkCycle(node, par, adj, visited) {
    visited[node] = true;
    // call checkcycle on all the neighbours which are not visited
    for (let ele of adj[node]) {
        if (!visited) {
            return checkCycle(ele, node, adj, visited)
        }
        // if at any point a neighbour is visited and its not the parent, it means it was reached from another path and hence it is a cycle
        else if (par !== ele) return true;
    }
    return false;
}

// T=> O(N + E)
// S=> O(N+E) + O(N) + O(N)