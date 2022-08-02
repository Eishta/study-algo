// We will take help of Kahn's Algorithm => topological sort of the directed graph using BFS
// we will count the elements in the sorted result and if it is equal to N -> given number of nodes then it is not a cyclic graph 
// why ? because a topological sort is possible for an acyclic directed graph

function detectCycleUsingTOPOSort(n, adj) {
    let indegree = Array(n).fill(0);
    let que = [];
    for (let i = 0; i < n; i++) {
        indegree[i]++;
    }
    for (let i = 0; i < n; i++) {
        if (indegree[i] == 0) {
            que.push(i);
        }
    }
    // increase the count every time a node is processed
    let count = 0;
    let topo = [];
    while (que.length) {
        let node = que.shift();
        // process the node
        topo.push(node);
        // increase the count
        count++;
        if(count > n) return true; // happens if the same node is processed again -> there is a cycle
        for (let ele of adj[node]) {
            indegree[ele]--;
            if (indegree[ele] == 0) {
                que.push(ele)
            }
        }
    }
    if (count == n) return false; // it is acyclic as a topological sort is created
    return true;

}
