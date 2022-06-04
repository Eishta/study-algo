// Moris travel -> maintain a thread 
// it gives the inorder in space O(1)
// we are avoiding the bracktracking here by creating the link to the root before the left is processed

const moris = (root) => {
    if (!root) return [];
    let inorder = [];
    let cur = root;
    while (cur) {
        if (!cur.left) {
            inorder.push(cur.val);
            cur = cur.right;
        }
        else {
            // make the link of the extreme right of root's left with the root
            let prev = cur.left;
            while (prev.right && prev.right != cur) { // to avoid running in a never ending loop we check for cur as after left subtree again the loop starts for cur and checks its left aand right
                prev = prev.right;
            }
            if (!prev.right) {
                prev.right = cur;  // after processing left subtree the pointer will again come on cur which is root
                cur = cur.left;    // after storing the refernce => move to left
            }
            else {
                prev.right = null; // when you reach here again  
                inorder.push(cur.val); // the left has been processed now push the root
                cur = cur.right;   // after the left subtree is processed => the pointer goes to root as the last node of left tree have pointer to root
            }
        }

    }
    return inorder;
}

const morisPreorder = (root) => {
    if (!root) return [];
    let preorder = [];
    let cur = root;
    while (cur) {
        if (!cur.left) {
            preorder.push(cur.val);
            cur = cur.right;
        }
        else {
            // make the link of the extreme right of root's left with the root
            let prev = cur.left;
            while (prev.right && prev.right != cur) {
                prev = prev.right;
            }
            if (!prev.right) {
                prev.right = cur;
                preorder.push(cur.val); // before moving to left, process the root
                cur = cur.left;
            }
            else {
                prev.right = null;
                cur = cur.right;
            }
        }
    }
    return preorder;
}