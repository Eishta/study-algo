// Ceil means find the closest bigger element than the given val
/**
 * 
 * @param {*} root 
 * @param {*} val 
 * returns a value >= val 
 */


const ceil = (root, val) => {
    let ceil = -1;
    while (root) {
        if (root.val == val) {
            ceil = root.val;
            return ceil;
        }
        if (root.val > val) {   // if val = 10  and root.val = 15, we will try to find 12, 12 < 15 => move to left
            ceil = root.val;
            // we want the closest bigger so we will find the element lesser than the root
            root = root.left;
        }
        else root = root.right;
    }
    return ceil;
}