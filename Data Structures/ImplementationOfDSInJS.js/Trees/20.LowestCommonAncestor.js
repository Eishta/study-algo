// Lowest common Ancsestor -> the nodes in the path from root to that node
// lowest means the closest ancestor of the two nodes

// Approach => we will traverse the tree and find the nodes , if any node is found we return the value of node 
// if left is null return right(can be null then both are null), if right is null return left(checked in first of so not null) and if both are not null, then return the root

/**
 * 
 * @param {*} root => root of the tree
 * @param {*} p => first node
 * @param {*} q => second node
 * @returns a node that is a common ancestor of  p and q
 */
const lowestCommonAncestor = (root, p, q) => {
    // if we find null -> return null
    // if we find any of the node, return the node
    if (root == null || root == p || root == q) return root;

    // if we find node from only one subtree and the other returns null, return the node back
    // in case both return a node, then both nodes have been found in the left and right subtree and root is ancestor  of both of them
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left == null) return right;  // if right has a node then good else we have to return null
    else if (right == null) return left; // left is not null as checked in first if
    else return root; // when both are not null, then the root is the lowest common ancestor

}