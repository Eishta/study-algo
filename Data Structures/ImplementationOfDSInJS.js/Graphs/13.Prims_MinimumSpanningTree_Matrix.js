/**
 * Minimum spannning tree-> where all the nodes are connected , vertices = v , edges = v-1
 * 2 greedy Algos - Prims and kruskal
 */

// Prims Algo -> greedy algo -> we choose the min weight edge of the selected vertices


function minKey(key, mst) {
    let min = Number.MAX_SAFE_INTEGER;
    let min_index;

    for (let i = 0; i < n; i++) {
        if (mst[i] == false && key[i] < min) {
            min = key[i], min_index = v;
        }
    }
}

function printMST(parent, graph) {
    for (let i = 0; i < graph.length; i++) {
        console.log(`${parent[i]}-${i}    ${graph[i][parent[i]]}`)
    }
}

/**
 * 
 * @param {*} graph -> matrix representation of graph
 */
function getPrimsMST(graph) {
    let n = graph.length;
    let key = Array(n).fill(Infinity); // stores the min weight of the nodes 
    let parent = Array(n).fill(-1); // stores the parent from which the node forms a connection with min weight
    let mst = Array(n).fill(false); // stores the nodes already processed

    // initialise the key and parent for the starting node
    key[0] = 0;
    parent[0] = -1;

    // traverse for all the nodes
    for (let i = 0; i < n; i++) {
        let u = minKey(key, mst);   // initially it will take 0, the starting key as others are Infinity
        mst[u] = true;  // process the node

        // traverse all the adjacent nodes and update the keys of all unprocessed nodes which can be reached at a lower cost from u
        for (let v = 0; v < n; v++) {
            if (graph[u][v] && mst[v] === false && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }

    printMST(parent, graph);
}

/* Let us create the following graph
    2 3
    (0)--(1)--(2)
    | / \ |
    6| 8/ \5 |7
    | / \ |
    (3)-------(4)
    9     */

let graph = [[0, 2, 0, 6, 0],
[2, 0, 3, 8, 5],
[0, 3, 0, 0, 7],
[6, 8, 0, 0, 9],
[0, 5, 7, 9, 0]];

// Print the solution
primMST(graph);


// Time = O(V^2)
// If done using adj list => O(ELogV) -> with the help of binary heap