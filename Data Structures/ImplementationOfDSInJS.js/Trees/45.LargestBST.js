// We need to return the size of the largest BST the tree taht follows the BST rule => size = no.of nodes
// We can check on every node isValid then find the number of elements in it => O(N) * O(N)=> O(N^2)


// We will keep size, min and max in every node

// if not BST => root. size = Max(left, right), root.min =  min, root.max = max


class Node {
    constructor(size, min, max) {
        this.size = size,
            this.min = min;
        this.max = max;
    }
}
function largestBST(root) {
    if (!root) return 0;
    return largestBSTHelper(root).size;
}
function largestBSTHelper(root) {
    if(root == null){
        return new Node(0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER); // min becomes MAX and max becomes MIN
    }
    // process left and right and then the root => postorder
    let left = largestBSTHelper(root.left);
    let right = largestBSTHelper(root.right);
    // if it is a BST
    if(left.max < root.val && root.val < right.min){
        return new Node(1 + left.size + right.size, Math.min(left.min, root.val), Math.max(right.max, root.val));
    }
    else return new Node(Math.max(left.size, right.size), Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}