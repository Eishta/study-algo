// here we are going to keep two arrays -> visited and dfsVisit
// visited keeps track of the visited nodes in any loop
// dfsVisit keeps track of the nodes visited in the current loop-> if backtracking happens , the current node is marked dfsVisitited = 0
// dfsVisit tells that the cur node is already covered or not in the current path, if yes, then there is a cycle

function checkCycle(n, adj) {
    let visited = Array(n).fill(0), dfsVisit = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (visited[i] == 0) {
            if (checkCycle(i, adj, visited, dfsVisit)) return true;
        }
    }
}

function checkCycle(node, adj, vis, dfsVisit) {
    // mark both vis and dfsVisit = 1
    vis[node] = 1;
    dfsVisit[node] = 1;

    // for every neighbour check if the ele is not visited, visit it 
    // else check if it is 

    for (let ele of adj[node]) {
        // if not visited
        if (vis[ele] == 0) {
            // check for every neighbour if it has a cycle
            if (checkCycle(ele, adj, vis, dfsVisit)) return true;
        }
        // as it is directed graph , if a node is already in the dfs cycle , already visited and is again getting visited , it means there is a cycle
        else if (dfsVisit[ele] === 1) {
            return true;
        }
    }
    dfsVisit[node] = 0;
    return false;
}

// T=> O(N + E)
// SC => O(2N) => visited and dfsVis
// Aux => O(N) => stack for recursion