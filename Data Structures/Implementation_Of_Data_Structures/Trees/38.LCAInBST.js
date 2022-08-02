// check if both the values are on the right or left, then do recursive call right or left resp else return the root
// both the values are on left means smaller than root, then they have LCA on left so move to left 
// , or right means greater than root , so move to right
// the point one value goes to left means is smaller than root and the other goes to right than root is the LCA
// there can be the case where left or right child is not present

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let temp = root;
    while (temp) {

        if (p.val < temp.val && q.val < temp.val) {
            temp = temp.left;
        }
        else if (p.val > temp.val && q.val > temp.val) {
            temp = temp.right;
        }
        else break;
    }
    return temp;
};

// Recursive

let lowestCommonAncestorRec = (root, p, q) => {
    if (!root) null;
    let cur = root.val;
    if (cur < p.val && cur < q.val) {
        return lowestCommonAncestorRec(root.right, p, q);
    }
    else if (cur > p.val && cur > q.val) {
        return lowestCommonAncestorRec(root.left, p, q)
    }
    return root;
}


// Time Complexity = O(H)
// Space = O(1)