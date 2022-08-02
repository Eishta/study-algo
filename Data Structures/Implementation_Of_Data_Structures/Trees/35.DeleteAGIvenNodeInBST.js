// search for the node to delete 
// // check if the root is null return null
// if root.val > data => go to left 
//      if root.left is equal to data => delete root.left and update it 
// if root.val < data => move to the right
//     if root.right is equal to data , delete root.right

// else move to left or right resp.

// how to delete 
/**
 * 1. if root has only one child return the other child;
 * 2. if both the children are present => update the root.left with root.left.left.
 * 3. update the extreme right of root.left with root.right
 * 4. return root.left;
 */


const helper = (root) => {
    // if only one child is present, return the other child
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    // if both are present
    // store the right child
    let rightChild = root.right;
    // find the extreme right of the left child => the greatest in the left subtree
    let lastRightInLeftTree = findExtremeRight(root.left);
    // update the greatest child's right with root.right 
    lastRightInLeftTree.right = rightChild;
    return root.left;
}

const findExtremeRight = (root) => {
    if (!root) return null;
    while (root.right) {
        root = root.right;
    }
    return root;
}

const deleteNodeIterative = (root, data) => {
    if (!root) return root;
    // if the root.val === data
    if (root.val == data) {
        return helper(root);
    }
    // if the val is smaller or greater than the root.val
    let dummy = root;
    while (root) {
        if (data < root.val) {
            // move to the left
            if (root.left && root.left.val === data) {
                // delete root.left
                root.left = helper(root.left);
                break;
            }
            else root = root.left;
        }
        else if (data > root.val) {
            // move to the right
            if (root.right && root.right.val == data) {
                // delete the root.right and update with new node
                root.right = helper(root.right);
                break;
            }
            else {
                root = root.right;
            }
        }
    }
    return dummy;
}