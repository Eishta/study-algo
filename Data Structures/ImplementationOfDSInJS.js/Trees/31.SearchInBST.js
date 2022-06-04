// Search -> if the val is less than root move to left else move to right
// while the root's value is not equal to given val , run the  loop 
// in the end return root, which can either be equal to searched value or null


const searchInBST = (root, val) => {
    if (!root) return;

    while (root && root.val !== val) {
        root = root.val > val ? root.left : root.right
    }
    return root;
}

// T - O(N)
// S - O(N) 