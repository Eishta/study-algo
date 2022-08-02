// Topological sort => if there is an edge u -> v, then u occurs before v in the sorted result
// the graph should be directed and acyclic
// we will use DFS here, and maintain a stack
// once the DFS is over for a Node, put it into the stack 

/**
 * @param {*} n -> number of nodes
 * @param {*} adj -> adjacency list
 */
function TopologicalSort(n, adj) {
    let stack = []; // to keep track of the previous nodes
    let visited = Array(n).fill(0);  // to mark the nodes we have processed and remove the reoccuring of the loops for already processed nodes
    // traverse for all the components of the graph 
    for (let i = 0; i < n; i++) {
        if (visited[i] == 0) {
            findTopoSOrt(i, visited, stack, adj);
        }
    }
    
    let topo = [];
    while (stack.length) {
        topo.push(stack.pop());
    }
    return topo;
}

function findTopoSOrt(node, vis, st, adj) {
    // visit the node and call dfs for its unvisited neighbours
    vis[node] = 1;
    for (let ele of adj[node]) {
        if (vis[ele] == 0) {
            findTopoSOrt(ele, vis, st, adj);
        }
    }
    // once dfs is over, put it in stack
    // note the child will be pushed first in the stack and popped after the parent -> LIFO 
    // that is what we want->  Parent u before the child v
    st.push(node);
}




// T => O(N+E)
// S=> O(N) + O(N)
// aux => O(N) => for stack of recursion