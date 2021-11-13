// wrong as it will pass for [3,2,5,1,4] also where 4 is greater than 2 but is in left subtree of 3 and should not be there as it is greater than 3
var isValidBST = function (root) {
    if (!root) {
        return true;
    }
    function helper(root, min, max) {
        if (!root) return true;
        if ((min !== null && min <= root.val) || (max !== null && max >= root.val)) return false;
        else return (helper(root.left, root.val, max) && (helper(root.right, min, root.val)));
    }

    return helper(root, null, null);
};

// calculate the inorder of the tree and check if its sorted O(n)

var isValidBST = function (root) {
    function inOrder(node) {
        if (!node) return [];
        return [...inOrder(node.left), node.val, ...inOrder(node.right)]
    }
    const sortedArr = inOrder(root);
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1] <= sortedArr[i]) return false;
    }
    return true;
};
