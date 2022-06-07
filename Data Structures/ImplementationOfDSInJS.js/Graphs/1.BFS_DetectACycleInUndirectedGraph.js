// Apraoch -> all the children or neighbours of a node should be unvisited except the parent, if any other neighbour is visited and its not the parent , then there is a cycle
// we push the node and also its parent
/**
 * 
 * @param {*} v - number of vertices
 * @param {*} adj - the adjacenecy list
 */
function isCycle(v, adj) {
    let visited = {};
    // traverse for all the components => can be connected ior disconnected with each other
    for (let i = 0; i < v; i++) {
        if (!visited[i])
            if(checkCycle(i, v, adj, visited)) return true;
    }
}

/**
 * 
 * @param {*} i -> the current node
 * @param {*} v -> total number of nodes or vertices
 * @param {*} adj -> adjacency list
 * @param {*} visited -> the map to track which node is already visited
 */
function checkCycle(i, v, adj, visited) {
    let queue = [];
    visited[i] = true;
    queue.push({ node: i, parent: -1 });

    while (queue.length) {
        let cur = queue.shift();
        let { node, parent } = cur;
        for (let ele of adj[node]) {
            if (!visited[ele]) {
                visited[ele] = true;
                queue.push({ node: ele, parent: node });
            }
            else if (parent !== ele) {
                // whenever the neighbour of the node is already visited and its not the parent node , there is a cycle
                return true;
            }
        }
        return false;
    }
}


// T => O(N + E)
// S => O(N + E) + O(N) + O(N) => adj , visited, queue