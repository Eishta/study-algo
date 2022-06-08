// here we have a graph, we keep a track of the dist and visited
// we take the node with min dist and traverse all neighbours 
// if 

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
    return min_index;
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
            // Update dist[v] only if is not in
            // visited, there is an edge from u
            // to v, and total weight of path
            // from src to v through u is smaller
            // than current value of dist[v]
            if (!visited[v] && graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
}

// complexity =>
// O(N^N)