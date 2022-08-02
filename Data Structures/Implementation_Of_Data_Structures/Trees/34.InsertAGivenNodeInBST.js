// search for the position that the node should be on
// if root = null, create it as root and return 
// if root < val => right,
//      => if right is null => set right to null else repeat on right
//  else left => if left is null => set left to null else repeat on left

const insertInBST = (root, val) => {
    if (!root) return new Node(val);
    let dummy = root;
    while (true) {
        if (root.val <= val) {
            // move to right
            if (root.right) {
                root = root.right;
            } else {
                root.right = new Node(val);
                break;
            }
        }
        else {
            if (root.left) {
                root = root.left;
            } else {
                root.left = new Node(val);
                break;
            }
        }
    }
    return dummy;
}