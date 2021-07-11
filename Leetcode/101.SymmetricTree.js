// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

//                 1
//         2        |       2
// 3            4   |   4         3     

// postOrder of one side = reverse of preorder of another side            

var isSymmetric = function (root) {
    // if root is null(no node in tree)
    if (!root) return true;
    // else return the result of function is Miror
    return isMirror(root.left, root.right)
};

var isMirror = function (left, right) {
    // if both are null , they have reached the leaf nodes by passing the if (left.val == right.val) test
    if (!left && !right) {
        return true;
    }
    // if one of the values is null as if both were null , they would not reach this point after first check
    if (!left || !right) return false;
    // if no node among left or right is null, check for the values to be equal
    if (left.val == right.val) {
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    else return false; // if val of left & rigt is not equal , return false straight away.
}

//--------------------------------------------------------------Iterative
var isSymmetric = function (root) {
    let stack = [[root.left, root.right]];
    while (stack.length) {

        let [left, right] = stack.pop();
        console.log('left');
        console.log(left);
        console.log('right'); console.log(right)
        if (!left && !right) continue;
        if (!left || !right) return false;
        if (left.val == right.val) {
            stack.unshift([left.left, right.right]);
            stack.unshift([left.right, right.left]);
            console.log(stack)

        }
        else return false;
    }
    return true;
}