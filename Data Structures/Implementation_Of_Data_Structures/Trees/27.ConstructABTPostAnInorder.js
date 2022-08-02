
function getTree(p, ps, pe, i, is, ie, map) {
    if(ps > pe || is > ie)return null
    let ele = p[pe]; // postorder gives the root element
    let index = map.get(ele);  // get the index of this root in the inorder using map
    let numleft = index - is;  // get the number of elements on the left of root in the inorder
    let root = new TreeNode(ele);   // create the root node
    // Inorder => 
    // left = left of the index in inorder = is to index - 1,
    // right = index + 1 to ie
    // Postorder
    // left = ps to ps + numleft - 1
    // right = ps + numsLeft to pe -1
    root.left = getTree(p, ps, ps + numleft - 1, i, is, index - 1, map);
    root.right = getTree(p, ps + numleft, pe - 1, i, index + 1, ie, map);
    return root;
}
var buildTree = function(inorder, postorder) {
        // both should have equal number of elements
    if (postorder.length !== inorder.length) return null;
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    return getTree(postorder, 0, postorder.length - 1, inorder, 0, inorder.length - 1, map);
};