let Node = (data) => {
    return {
        data: data,
        left: null,
        right: null,
    }
}
class BST {
    constructor() {
        this.root = null
    }
}
BTS.prototype.insert = data => {
    let node = new Node(data);
    if (this.root === null) this.root = node;
    else this.insertNode(this.root, node);
}
BTS.prototype.insertNode = (root, node) => {
    if (node.data < root.data) {
        if (root.left === null) root.left = node;
        else this.insertNode(root.left, node);
    }
    else {
        if (root.right === null) root.right = node;
        else this.insertNode(root.right, node)
    }
}
BTS.prototype.findMinNode = function (root) {
    if (!root) root = this.root;
    if (root.left === null) return root;
    else { return this.findMinNode(root.left) }
}
BTS.prototype.delete = function (data) {
    this.root = this.removeNode(this.root, data);
}
BTS.prototype.removeNode = function (root, data) {
    if (root === null) return null;
    else if (data < root.data) {
        root.left = this.removeNode(root.left, data);
    }
    else if (data > root.data) {
        root.right = this.removeNode(root.right, data);
    }
    else {
        if (!root.left && !root.right) {
            root = null;
            return null;
        }
        else if (!root.left) {
            root = root.right;
            return root;
        }
        else if (!root.right) {
            root = root.left;
            return root;
        }
        else {
            let aux = this.findMinNode(root.right);
            root.data = aux.data;
            root.right = this.removeNode(root.right, aux.data);
            return root;
        }
    }
}
BTS.prototype.search = function (root, data) {
    if (root == null) return null;
    else if (data < root.data) {
        return this.search(root.left, data);
    }
    else if (data > root.data) {
        return this.search(root.right, data);
    }
    else {
        return root;
    }
}
BTS.prototype.inOrder = function (root) {
    if (root !== null) {
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
    }
}
BTS.prototype.preOrder = function (root) {
    if (root !== null) {
        console.log(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
}
BTS.prototype.postOrder = function (root) {
    if (root !== null) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.data);
    }
}