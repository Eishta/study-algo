// Flatten means create a linked list kind of links in the tree such that all the nodes are at the right of their parent and the left is null
// so we basically need to do is => cur.right = cur.left and cur.left = null where cur is any node

// Recursive
// we flatten the left after right because we want to attach the left to the root's right and
// if left is the last flattened, it will be contained in prev
// bottom up approach

const flatten = (root) => {
    let prev = null;
    function flattenHelper(root) {
        if (!root) return;
        // flatten the right child first , then flatten the left child and then update the root.right with root.left and root.left = null;
        flattenHelper(root.right);
        flattenHelper(root.left);

        root.right = prev;
        root.left = null;
        prev = root;
        return root;
    }
    return flattenHelper(root)
}


// Iterative 
// we main a stack and push the right and left child to it 
// update the pointers to cur.right = stach.top => if left is not null then left
// top down approach => we need stack to keep track of the pointers, once we update the cur.right , the cur.right node is lost so we keep them in stack to store and maintain their order

const flattenIterative = (root) => {
    if (!root) return null;
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let cur = stack.pop();
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);

        // update the pointers of cur
        cur.right = stack.length ? stack[stack.length - 1] : null;
        cur.left = null;
    }
    return root;
}


// Moris Traversal 
// update the link of the current node first and move to its right then => top down approach 
// cur.left becomes the cur.right and is flattend first then the right part
const flattenMoris = (root) => {
    if (!root) return;
    let cur = root; // store the root
    while (cur) {
        if (cur.left) {
            let prev = cur.left;
            while (prev.right) {
                prev = prev.right;
            }
            prev.right = cur.right;
            cur.right = cur.left;
            cur.left = null;
        }
        cur = cur.right;
    }
}



// All of them have T(N) = O(N) and S(N) = O(N);
// but moris has Space = O(1)