class UnionFind {
    constructor(elements) {
        // Number of disconnected components
        this.count = elements.length;
        // Keep Track of connected components
        this.parent = {};
        this.rank = {};

        // Initialize the data structure such that all
        // elements have themselves as parents
        elements.forEach(element => {
            this.parent[element] = element;
            this.rank[element] = 0;
        });
    }
 // Returns final parent of a node
    findParent(a) {
        while(this.parent[a] !==a){
            a = this.parent[a];
        }
        return a;

    }
    union(a, b) {
        let rootA = this.findParent(a);
        let rootB = this.findParent(b);
        // // Roots are same so these are already connected.
        // if(rootA === rootB){
        //     return;
        // }

        if(this.rank[rootA] > this.rank[rootB]){
            this.parent[rootB] = rootA;
        }
        else if(this.rank[rootB] > this.rank[rootA]){
            this.parent[rootA] = rootB;
        }
        else {
            this.parent[rootA] = rootB;
            this.rank[rootB]++
        }

    }
    
   // Checks connectivity of the 2 nodes
    isConnected(a, b) {
        return this.findParent(a) === this.findParent(b);
    }
}


let uf = new UnionFind(["A", "B", "C", "D", "E"]);
uf.union("A", "B"); uf.union("A", "C");
uf.union("C", "D");

console.log(uf.isConnected("B", "E"));
console.log(uf.isConnected("B", "D"));

// false
// true

export default UnionFind;