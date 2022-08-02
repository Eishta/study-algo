// Symmetric tree - when the left and right subtrees are the mirror image of each other
// the left of left subtree is equal to the right of right subtree and the left of right subtree is equal to the right of left subtree

/**
 * Approach - Recursive 
 * We will check the value of the current node to be equal and recursively call with -> p.left , q.right & p.right , q.left
 */


const isSymmetricTree = (root) => {
    return !root || isSymmetricTreeHelper(root.left, root.right);
}

const isSymmetricTreeHelper = (p, q) => {
    if (!p || !q) return p === q;

    return p.val === q.val && isSymmetricTreeHelper(p.left, q.right) && isSymmetricTreeHelper(p.right, q.left)
}