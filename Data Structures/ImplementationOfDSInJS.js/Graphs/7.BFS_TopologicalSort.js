// Topological sort BFS -> Kahn's Algorithm
// => if there is an edge u -> v, then u occurs beofre v in the sorted result
// the graph should be directed and acyclic
// we will use BFS here, and maintain a queue
// we will push the node in queue once the indegree of the node is 0
// indegree-> the number of incoming nodes to a given node


// Steps:-
// 1. calculate the indegree of all nodes and push the nodes with 0 indegree into q (they are ready to process)
// 2. get the first ele out of queue, push to the result, and visit all its neighbours decreasing their indegree as one of their parents is processed
// 3. if the indegree of any neighbour becomes 0, it is ready to process , push it into the queue


/**
 * @param {*} n -> number of nodes
 * @param {*} adj -> adjacency list
 */

function TopologicalSortBFS(n, adj) {
    let queue = []; // to keep track of the previous nodes
    let indegree = Array(n).fill(0);  // to store the indegree of all the nodes
    // traverse for all the components of the graph 
    // and as it is directed graph their is an incoming edge to all the neighbours of the cur node from node
    for (let i = 0; i < n; i++) {
        for (let ele of adj[i]) {
            indegree[ele]++;
        }
    }
    // push the nodes with indegree 0 into the queue
    for (let i = 0; i < n; i++) {
        if (indegree[i] == 0) {
            queue.push(i);
        }
    }
    let topo = [];
    while (queue.length) {
        // remove the node from queue and process it => push to the result
        let node = queue.shift();
        topo.push(node);
        for (let ele of adj[node]) {
            // we reduce the ingdegree to check if the parents of the ele have been processed
            // topological sort means => for every edge, u-> v , u should appear before v
            // so when all the nodes u from which v can be accessed are proccessed, the indegree of v becomes 0 and then it is ready to get processed 
            // once ready , the ele is pushed to the queue 
            indegree[ele]--; // node -> parent has been processed
            if (indegree[ele] == 0) {  // if there is no parent remaining to be processed
                queue.push(ele);
            }
        }
    }
    return topo;
}

// T => O(N+E)
// S=> O(N) + O(N)
// aux => O(N) => for stack of recursion 