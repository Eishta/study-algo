

const childrenSum = (root) => {
    if (!root) return 0;

    let child = 0;
    if (root.left) child += root.left.data;
    if (root.right) child += root.right.data;

    if (child > root.data) {
        root.data = child;
    }
    else {
        if (root.left) root.left.data = root.data;
        if (root.right) root.right.data = root.data;
    }

    childrenSum(root.left);
    childrenSum(root.right);

    let bottomUp = 0;
    if (root.left) bottomUp += root.left.data;
    if (root.right) bottomUp += root.right.data;
    if (root.left && root.right) root.data = bottomUp;
    return root;
}