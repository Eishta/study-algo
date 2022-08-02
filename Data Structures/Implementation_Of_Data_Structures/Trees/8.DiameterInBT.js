// Diamater is the longest path between 2 nodes
// this path need not include the root -> can or cannot have the root in the path


/**
 * Approach
 * we will pass the refernce of the diameter to checkheight and keep updating the till now max diameter (lh + rh)
 * and the checkHeight function will do the usual work of return the height of the node
 * 
 */
const diameterInBT = (root) => {
    let diameter = 0;
    checkHeight(root, diameter);
    return diameter;
}

const checkHeight = (root, diameter) => {
    if (!root) return 0;

    let lh = checkHeight(root.left, diameter);
    let rh = checkHeight(root.right, diameter);
    // update the diameter with the till now max diameter
    diameter = Math.max(diameter, lh + rh);
    return 1 + Math.max(lh, rh);
}