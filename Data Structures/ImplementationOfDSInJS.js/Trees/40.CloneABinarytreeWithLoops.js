// Detect the loops  and create the new node simultaneously 
// Recursion
// Cloning 
// Map (dictionary) maintenance 

// keep all the nodes in map and keep the refernce of the new cloned node in them 
// if a node is already vistied , return the cloned node corresponding to that

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

function cloneTree(root) {
    if (!root) return null;
    let map = {};
    return cloneHelper(root, map);
}

function cloneHelper(root, map) {
    if (map[root]) return map[root];
    let cloneRoot = new Node(root.data);
    cloneRoot.left = root.left && cloneHelper(root.left, map);
    cloneRoot.right = root.right && cloneHelper(root.right, map);
    map[root] = cloneRoot;
    return cloneRoot;
}
