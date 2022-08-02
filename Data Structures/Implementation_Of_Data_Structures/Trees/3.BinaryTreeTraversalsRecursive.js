class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(data = null) {
        this.root = new Node(data);
    }
    // Recursive Approach
    preOrderRecursive(root) {
        // root - left - right
        if (root) {
            console.log(root.data);
            this.preOrderRecursive(root.left);
            this.preOrderRecursive(root.right);
        }
    }
    inOrderRecursive(root) {
        // left - root - right
        if (root) {
            this.inOrderRecursive(root.left);
            console.log(root.data);
            this.inOrderRecursive(root.right);
        }
    }
    postOrderRecursive(root) {
        // left - right - root
        if (root) {
            this.postOrderRecursive(root.left);
            this.postOrderRecursive(root.right);
            console.log(root.data);
        }
    }
}

// create a tree 

let tree = new BinaryTree(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);