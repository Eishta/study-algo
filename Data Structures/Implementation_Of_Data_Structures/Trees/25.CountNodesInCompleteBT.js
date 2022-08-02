// complete binary tree -> a tree with nodes as left as possible 
// we will check the height of the left and the right tree-> if they are equal return 2 ^ h -1 => no. of nodes in a perfect BT
// else return 1 + no.of nodes on left + no. of nodes on right
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var countNodes = function(root) {
    if (!root) return 0;

    let lHeight = leftheight(root);
    let rHeight = rightHeight(root);
    if (lHeight === rHeight) {
        let nodes =  Math.pow(2, lHeight) - 1;
        return  nodes;
    }
    else {
        return 1 + countNodes(root.left) + countNodes(root.right);
    }
};

const leftheight = (root) => {
    if (!root) return 0;
    return 1 + leftheight(root.left)
}
const rightHeight = (root) => {
    if (!root) return 0;
    return 1 + rightHeight(root.right)
}
