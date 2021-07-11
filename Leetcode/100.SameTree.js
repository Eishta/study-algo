/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val === q.val)
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
// Time complexity: O(n)
// Space complexity: O(1) (ignore recursion stack, otherwise the height of the tree)
///======================================= Method 2
// find the preorder of both and compare