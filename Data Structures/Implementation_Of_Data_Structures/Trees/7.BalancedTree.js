// when the differnce of the left Height and right height is not more than 1
// Math.abs(lh-rh) <=1 for every node

// get left height and right height and if at any point there diff is greater than 1, return -1;
// at any point , if height of the left or right subtree comes -1, return -1;

const checkHeight = (node) => {
    if (!node) return 0;
    let lh = checkHeight(node.left);
    let rh = checkHeight(node.right);
    if (lh == -1 || rh == -1 || Math.abs(lh - rh) > 1) return -1;
    return 1 + Math.max(lh, rh)
}

const isBalanced = (root) => {
    return checkHeight(root) !== -1;
}
