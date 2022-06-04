// send a range of values,  a node's val can lie between
// initially it can be [mininteger , maxinteger]

var isValidBST = function (root) {
    if (!root) return true;

    return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

const helper = (root, min, max) => {
    if (root) {
        let left = helper(root.left, min, root.val);
        let right = helper(root.right, root.val, max);
        if (root.val > min && root.val < max && left && right) return true;
        else return false;
    }
    else return true;
}