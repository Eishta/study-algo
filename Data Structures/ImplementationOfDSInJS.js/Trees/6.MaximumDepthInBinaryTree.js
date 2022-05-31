// Max Height of tree - the no. of edges from root to the deepest leaf node , also known as Max Depth of tree
// Recursive approach - for every node -> max height between left and right subtree + 1 (for the node)

const MaximumDepthInBinaryTree = (node) => {
    if (!node) return 0;
    let lh = MaximumDepthInBinaryTree(node.left);
    let rh = MaximumDepthInBinaryTree(node.right);
    return 1 + Math.max(lh, rh)
}
