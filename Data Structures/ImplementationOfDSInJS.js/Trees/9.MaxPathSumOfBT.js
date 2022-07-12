// the path contains every node only once 

// 124. Binary Tree Maximum Path Sum - Leetcode - #hard => includes negative values

var maxPathSum = function (root) {
    if (!root) return 0;
    let maxSum = { sum: -Infinity };
    maximuPathSum(root, maxSum)
    return maxSum.sum;

};

function maximuPathSum(root, sum) {
    if (!root) return 0;
    let ls = maximuPathSum(root.left, sum);
    let rs = maximuPathSum(root.right, sum);

    sum.sum = Math.max(sum.sum,
        root.val,
        root.val + ls,
        root.val + rs,
        ls + rs + root.val);
    return Math.max(Math.max(ls, rs) + root.val, root.val);
}