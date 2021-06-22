// Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays). 
// Trees provide moderate insertion/deletion (quicker than Arrays and slower than Unordered Linked Lists).

// APPLICATIONS
// Routing, searching a word exists using Trie, File Storage Sytem, etc
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    getRootNode() {
        return this.root;
    }
    insert(data) {
        let node = new Node(data);
        if (this.root === null) {
            this.root = node;
        }
        else this.insertNode(this.root, node)
    }
    insertNode(root, node) {
        if (node.data < root.data) {
            if (!root.left) {
                root.left = node;
            }
            else {
                this.insertNode(root.left, node);
            }
        }
        else {
            if (!root.right) {
                root.right = node;
            }
            else {
                this.insertNode(root.right, node)
            }
        }
    }
    remove(data) {
        this.removeNode(this.root, data);
    }
    removeNode(root, data) {
        // if the root is null=> nothing to delete
        if (root === null) {
            return null;
        }
        // if node is less than root, traverse to left subtree
        else if (data < root.data) {
            root.left = this.removeNode(root.left, data);
            return root;
        }
        // if node is greater than rootm traverse to right subtree
        else if (data > root.data) {
            root.right = this.removeNode(root.right, data);
            return root;
        }
        else {
            // no child
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            // no left child
            else if (!node.left) {
                node = node.right;
                return node;
            }
            // no right child
            else if (!node.right) {
                node = node.left;
                return node;
            }
            // both child are present=> find min from right as aux, swap the data with node and remove aux
            else {
                let aux = this.findMinNode(node.right);
                node.data = aux.data;
                node.right = this.removeNode(node.right, aux.data);
                return node;
            }
        }
    }
    search(root = this.root, data) {
        if (!root) return null;
        else if (data < root.data) {
            this.search(root.left, data);
        }
        else if (data > root.data) {
            this.search(root.right, data)
        }
        else {
            return root;
        }
    }
    findMinNode() {
        if (!this.root) return null;
        else {
            let temp = this.root;
            while (temp.left) {
                temp = temp.left;
            }
            return temp;
        }
    }

}