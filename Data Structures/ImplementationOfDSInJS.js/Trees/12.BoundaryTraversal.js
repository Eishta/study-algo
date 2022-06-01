// Boundary traversal - left boundary  excluding leaf nodes + leaf nodes + rigth boundary excluding the leaf nodes in reverse order 
// left boundary -> move to root's left -> if left is not present go to the right child -> exclude the leaf nodes
// leaf nodes -> preorder -> check if leaf and add to response
// rigth boundary in reverse order -> we will maintain a stack to push the boundary in forward order and then pop and push in result to reverse it 
//                                 -> go to the right and if rigth is not present then go to left -> prefer right 


function printBoundary(root) {
    if (!root) return [];
    let res = [];
    if (!isLeafNode(root)) res.push(root.val);
    leftBoundary(root, res);
    addLeaves(root, res);
    rightBoundary(root, res);
    return res;
}

function leftBoundary(root, res) {
    let node = root.left;
    while (node) {
        if (!isLeafNode(node)) res.push(node.val);
        if (node.left) { node = node.left; }
        else { node = node.right; }
    }

}

function rightBoundary(root, res) {
    let node = root.right;
    let stack = [];
    while (node) {
        if (!isLeafNode(node)) stack.push(node.val);
        if (node.right) {
            node = node.right;

        }
        else {
            node = node.left;
        }
    }
    while (stack.length) {
        res.push(stack.pop());
    }
}

function addLeaves(root, res) {
    if (isLeafNode(root)) {
        res.push(root.val);
        return;
    }
    if (root.left) addLeaves(root.left);
    if (root.right) addLeaves(root.right);
}

function isLeafNode(root) {
    return !root.right && !root.left;
}