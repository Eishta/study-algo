// Adjacency list -> all vertices of a graph can be traversed in O(V+E) time using BFS.
// use a Min Heap to store the vertices not yet included in MST.
// Min Heap is used as time complexity of operations like extracting minimum element and decreasing key value is O(LogV) in Min Heap.

// Adjacenecy list node -> dest, weight
class ListNode {
    constructor(a, b) {
        this.dest = a;
        this.weight = b;
    }
}

class Graph {
    constructor(e) {
        this.V = e;
        this.adj = new Array(V);
        for (let o = 0; o < V; o++)
            this.adj[o] = [];
    }
}
// Priority Queue node -> vertex - key pair
class node {
    constructor() {
        this.vertex = 0;
        this.key = 0;
    }
}

function primsMst(graph) {

}















let V = 9;
let graph = new Graph(V);
addEdge(graph, 0, 1, 4);
addEdge(graph, 0, 7, 8);
addEdge(graph, 1, 2, 8);
addEdge(graph, 1, 7, 11);
addEdge(graph, 2, 3, 7);
addEdge(graph, 2, 8, 2);
addEdge(graph, 2, 5, 4);
addEdge(graph, 3, 4, 9);
addEdge(graph, 3, 5, 14);
addEdge(graph, 4, 5, 10);
addEdge(graph, 5, 6, 2);
addEdge(graph, 6, 7, 1);
addEdge(graph, 6, 8, 6);
addEdge(graph, 7, 8, 7);

// Method invoked
primsMst(graph);