// left view => how the tree appears from the left 
// iterative approach -> store the first node of each level when traversed from left to left
// recursive approach => we will do the preorder but in reverse direction -> root-left-left
// with every node we will send a level info also in recursive call which will be compared to the ds => stack size that we will maintain to store the result
// number of elements in the ds should be level + 1 as the level starts from 0 and at level 0 we have 1 node taht is the root.
// ds.size = level + 1, if it is ds.size = level , then we need to push the element

function leftView(root) {
    let res = [];
    leftViewHelper(root, 0, res);
    return res;
}

function leftViewHelper(root, level, res) {
    if (!root) return;
    if (res.length === level) {
        res.push(root.val);
    }
    leftViewHelper(root.left, level + 1, res);
    leftViewHelper(root.right, level + 1, res)
}