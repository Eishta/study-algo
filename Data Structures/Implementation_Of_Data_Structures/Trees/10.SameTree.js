// Same tree - when the structure and nodes are same in two trees they are called same tree

/**
 * Approach - Recursive 
 * if one root is null, the other should be null, the value of the root and their left and right subtree should be equal
 * compare the value of the roots of both tree and recursively check for their left and right subtree
 */

function isSameTree(p, q) {
    if (!p || !q) return p === q;

    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}