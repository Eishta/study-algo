// Root to node path 

// here we maintain an array which stores the path when we traverse the tree recursively 
// in this array , we will first push the current node, if this node == given node return ture
// if in the left or right tree recursion , any of them return true , then return true, else pop the current node and return false;

/**
 * 
 * @param {*} root => root of the tree
 * @param {*} node => the node to which the path is to be found
 * @returns array of the nodes that are included in the path from root to node
 */
const rootToNodePath = (root, node) => {
    if (!root) return [];
    let res = [];

    recursion(root, res, node);
    return res;
}

const recursion = (root, res, node) => {
    if (!root) return false; // we reached at this point if we didnt found the node till now , so null indicates the node is not on this path

    res.push(root.val);
    if (root.val == node || recursion(root.right, res, node) || recursion(root.left, res, node)) return true;

    res.pop();
    return false;
}

