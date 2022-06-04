// Preorder => sort and get the inorder and then using preorder and inorder create the BST 
// T(N) = O(Nlogn) + O(N) , s=> O(N)



// Second approach=> from preorder , the first one will always be rotot so we will send ranges with the nodes and build tree
var bstFromPreorder = function (preorder) {
    let i = 0;
    return buildTree(preorder, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    function buildTree(A, l, u) {
        if (i === A.length) return null;
        if (A[i] > l && A[i] < u) {
            let root = new TreeNode(A[i]);
            i++;
            root.left = buildTree(A, l, root.val);
            root.right = buildTree(A, root.val, u);
            return root
        } else return null

    }
};
