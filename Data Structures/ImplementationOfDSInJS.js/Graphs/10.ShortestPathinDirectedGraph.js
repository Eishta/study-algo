// get the topological sort using DFS
// take a dist array with infinity 
// mark the dist of src as 0
// pop from stack and if the dist of node is not infinity , find distance of its neighbours by using its dist and the weight btween them


function getTopoSort(adj, node, visited, stack) {
    visited[node] = true;
    // process all the neighvours of the node and then push it to the stack
    for (let ele of adj[node]) {
        if (!visited[ele.node]) {
            getTopoSort(adj, ele.node, visited, stack);
        }
    }
    stack.push(node);
}

function shortestPathInDirectedGraph(adj, n, src) {
    // find topological sort using dfs
    let visited = {};
    let stack = [];

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            getTopoSort(adj, i, visited, stack);
        }
    }

    // start the calculation of distance
    let dist = Array(n).fill(Infinity);
    dist[src] = 0;
    // the first node should be the src node of which the distance  is stored as 0
    while (stack.length) {
        let node = stack.pop();
        if (dist[node] !== Infinity) {
            for (let ele of adj[node]) {
                if (dist[ele.node] > dist[node] + ele.weight) {
                    dist[ele.node] = dist[node] + ele.weight;
                }
            }
        }
    }
    return dist;
}


// Complexity =>

// Time = 2O(N+E)
// Space = O(N) + O(N) + O(N)
// Aux = O(N)