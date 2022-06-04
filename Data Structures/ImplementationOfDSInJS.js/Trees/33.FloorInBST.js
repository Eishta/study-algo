// Floor means that the closest smaller element to the given val


const floor = (root, val) => {
    if (!root) return;
    let floor = -1;
    while (root) {
        if (root.val == val) {
            return root.val
        }
        if (root.val < val) { // if root.val = 10 and val = 15, so we wnat to find 14, 10 < 14 so  move to right
            floor = root.val; // as root.val is smaller than val 
            // go more closer to the val so increase - now we want to increase this floor to be the closest to val
            root = root.right;
            
        }
        else {
            root = root.left
        }
    }
    return floor
}