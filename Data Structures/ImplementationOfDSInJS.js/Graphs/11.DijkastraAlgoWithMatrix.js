 // we maintain a visited array , 
// in every loop, we find the node with min dist which is not yet visited = u
// traverse all the not visited neighbours of u and update their dist if it is less when the path of v is through u
// undirected weighted graph 

// keep a ds to store the unvisited nodes (minheap in case of list), (visited array in matrix)
// get the min dist non visited node and traverse all its non visited neighbours and update their dist if you find a lower one

// Dijkstra's algorithm can work on both directed and undirected graphs,
// Dijkstra's algorithm cannot handle negative edge weights
function minDistance(dist, visited, n) {
    // Initialize min value
    let min = Number.MAX_VALUE;
    let min_index = -1;

    for (let v = 0; v < n; v++) {
        if (visited[v] == false && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;  // vertex with the min distance
}
function dijkstra(graph, src) {
    let n = graph.length;
    let dist = Array(n).fill(Infinity);
    let visited = new Array(n).fill(false);

    dist[src] = 0;
    visited[src] = true;
    for (let i = 0; i < n; i++) {
        let u = minDistance(dist, visited, n);
        visited[u] = true;
        for (let v = 0; v < n; v++) {
            // Update dist[v] if :- 
            // 1. It is not visited = !visited[v]
            // 2. there is an edge from u tov = graph[u][v] !== 0
            // 3. total weight of path from src to v through u is smaller than current value of dist[v] 
            // = dist[u] + graph[u][v] < dist[v]
            if (!visited[v] && graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[ u] + graph[u][v];
            }
        }
    }
    return dist;
}

// Time complexity => O(N^N)
// Using adjacency list => O(ELogN)