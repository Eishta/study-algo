// Problem-> find the shortest path from a source node to all other nodes in the graph

// BFS -> to go level wise
// we use queue for BFS traversal and a dist array to maintain the distance of all the nodes from the source
// we will update the distance of a node if we get a  better and a smaller path
// as it is undirected , there are 2E paths to reach a node

/**
 * 
 * @param {*} n - no. of vertices
 * @param {*} adj  - adj list 
 * @param {*} src - ssource from ehich the traversal will start
 * @returns 
 */
function shortestPath(n, adj, src) {
    // initialise with the max value
    let dist = Array(n).fill(Infinity);
    let que = [];
    que.push(src);
    dist[src] = 0; // dist btw src and src is 0;

    // traverse through the graph
    while (que.length) {
        let node = que.shift();

        for (let ele of adj[node]) {
            if (dist[ele] > dist[node] + 1) {
                dist[ele] = dist[node] + 1;
                que.push(ele);
            }
        }
    }
    return dist;
}

// T(N) => O(N+E)
// S(N) => O(N) + O(N) => for the queue and dist array