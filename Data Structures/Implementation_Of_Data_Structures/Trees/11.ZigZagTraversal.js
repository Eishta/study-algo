// Zig-Zag traversal - A level order traversal in which the traversal goes from left to right then for next level-> right to left then left to right and  so on..
/**
 * this means -> we can maintain a flag which is negated after each traversal ->
 *   if flag = true , we go left to right 
 *   else we go right to left
 */

const ZigZagTraversal = (root) => {
    if (!root) return [];
    let res = [], que = [];
    que.push(root);
    let flag = true;
    while (que.length) {
        let size = que.length;
        let level = [];
        for (let i = 0; i < size; i++) {
            let node = que.shift();
            let index = flag ? i : size - i - 1;

            level[index] = node.val;
            if (node.left) que.push(node.left);
            if (node.right) que.push(node.right);
        }
        flag = !flag;
        res.push(level);
    }
    return res;
}