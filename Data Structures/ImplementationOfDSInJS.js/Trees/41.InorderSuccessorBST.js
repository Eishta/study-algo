// 1. Brute force - store the inoder and then return the given values next element => first ele > val 
// T= O(N)
// S=O(N)

// 2. While doing traversal return the first ele > val
// t = O(N)
// s= O(1) -> incase or Moris

// implementing a ceil in bst- closest bigger element


const findSuccessor = (root, p) => {
    if (!root) return null;
    let suc = null;
    while (root) {
        if (root.val > p.val) {
            suc = root.val;
            root = root.left; // to find a more closer one
        } else if (root.val <= p.val) {
            root = root.right;
        }
    }
    return suc;

}
// floor in bst - closest smaller element

const findPredecessor = (root, p) => {
    if (!root) return null;
    let pre = null;
    while (root) {
        if (root.val < p.val) {
            pre = root.val;
            root = root.left; // to find a more closer one
        } else if (root.val >= p.val) {
            root = root.right;
        }
    }
    return pre;

}