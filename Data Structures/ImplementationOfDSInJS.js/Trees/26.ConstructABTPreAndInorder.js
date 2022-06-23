// Preorder = root, left , right
// Inorder = left , root, right

// Preorder can be used to see the root and then we can see in inorder the left and right tree elements 
// we need to maintain a map of elements of inorder along with the index they are at.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function constructTree(preorder, inorder) {
    if (preorder.length !== inorder.length) return null;
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    return getTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, map);
}

function getTree(p, ps, pe, i, is, ie, map) {
    if (ps > pe || is > ie) return null
    let ele = p[ps];  // get the root ele from preorder
    let index = map.get(ele); // find the index in inorder
    let numleft = index - is; // get the numebr of elements on left of index in inorder
    let root = new TreeNode(ele); // create the root node
    // console.log(ele, index, numleft, is, ie)
    // Inorder => 
    // left = left of the index in inorder = is to index - 1,
    // right = index + 1 to ie
    // preorder
    // left = ps + 1 to ps + numleft  // exclude the root
    // right = ps + numsLeft + 1 to pe
    root.left = getTree(p, ps + 1, ps + numleft, i, is, index - 1, map);
    root.right = getTree(p, ps + numleft + 1, pe, i, index + 1, ie, map)
    return root;
}