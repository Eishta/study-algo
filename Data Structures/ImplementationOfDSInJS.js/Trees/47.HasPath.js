// 112, has Path Sum from root to leaf - #easy
// #recursive 
var hasPathSum = function (root, targetSum) {
    if (!root && targetSum == 0) return false;
    return path(root, targetSum, { sum: 0 })
};

function path(root, target, sum) {
    if (!root) return false;
    if (root.val + sum.sum === target && !root.left && !root.right) {
        return true;
    }

    if (root.left && path(root.left, target, { ...sum, sum: sum.sum + root.val })) {
        return true;
    }

    if (root.right && path(root.right, target, { ...sum, sum: sum.sum + root.val })) {
        return true;
    }
    return false;
}

// #iterative

var hasPathSum = function (root, targetSum) {
    if (!root && targetSum == 0) return false;
    let stack = []
    stack.push([root, 0]);
    while(stack.length){
        let [node, sum] = stack.pop();
        if(!node) continue;
        sum+= node.val;
        if(sum === targetSum && !node.left && !node.right){
            return true;
        }
        else {
           node.left && stack.push([node.left, sum]);
           node.right && stack.push([node.right, sum]);
        }
    }
    return false;

};