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
    // Iterative Approach
    preOrderIterative(root) {
        if (!root) return [];
        let stack = [], result = [];
        stack.push(root);
        while (stack.length) {
            let node = stack.pop();
            result.push(node.data);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
        return result;
    }
    inOrderIterative(root) {
        if (!root) return [];
        let stack = [], result = [], node = root;
        while (stack.length || node) {
            if (node) {
                stack.push(node);
                node = node.left;
            }
            else {
                node = stack.pop();
                result.push(ele.data);
                node = node.right;
            }
        }
        return result;
    }
    postOrderIterative(root) {
        // using one stack
        let result = [], stack = [], node = root;
        while (stack.length || node) {
            if (node) {
                stack.push(node);
                node = node.left;
            }
            else {
                let temp = stack[stack.length - 1].right;
                if (temp) {
                    node = temp;
                }
                else {
                    temp = stack.pop();
                    result.push(temp.data);
                    while (stack.length && temp == stack[stack.length - 1].right) {
                        temp = stack.pop();
                        result.push(temp.data);
                    }
                }
            }
        }
        return result;
    }
    postOrderIterative2Stacks(root) {
        let st1 = [], st2 = [];
        if (!root) return [];
        st1.push(root);
        while (st1.length) {
            let node = st1.pop();
            st2.push(node);
            node.left && st1.push(node.left);
            node.right && st1.push(node.right);
        }
        while (st2.length) {
            node = st2.pop();
            result.push(node.data);
        }
        return result;
    }

    levelTraversal(root) {
        if (!root) return [];
        let result = [], queue = [];
        queue.push(root);
        while (queue.length) {
            let length = queue.length;
            let level = [];
            for (let i = 0; i < length; i++) {
                let node = queue.shift();
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
                level.push(node.val);
            }
            result.push(level);
        }
        return result;
    }
}

// create a tree 

let tree = new BinaryTree(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);