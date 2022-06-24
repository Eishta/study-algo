// BFS, 
// Min heap ->  to store the nodes yet to be visited
// Min heap -> returns the min dist node not yet visted
 
// keep a ds to store the unvisited nodes (minheap in case of list), (visited array in matrix)
// get the min dist non visited node and traverse all its non visited neighbours and update their dist if you find a lower one

class Node {
    constructor(node, weight) {
        this.node = node;
        this.weight = weight;
    }
}
function shortestPath(n, adj, src) {
    let prQue = [];
    let dist = Array(n).fill(Infinity);
    dist[src] = 0;

    prQue.push(new Node(src, 0));
    while(prQue.length){
        let node = prQue.shift(); // assuming its the node with min distance
        for(let ele of adj[node.node]){
            if(dist[ele.node] > dist[node.node] + ele.weight){
                dist[ele.node] = dist[node.node] + ele.weight;
                prQue.push(new Node(ele.node, dist[ele.node]));
            }
        }
    }
    return dist;
}

