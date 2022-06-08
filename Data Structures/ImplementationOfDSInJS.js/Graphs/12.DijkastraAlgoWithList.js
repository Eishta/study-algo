// we will take a priority queue which will give us the node with least distance at the top
// we maintain a dist array to calculate the distance 

// do the BFS traversal 

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

