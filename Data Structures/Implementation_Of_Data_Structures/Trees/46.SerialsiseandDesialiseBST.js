const serialize = (root) => {
    if (!root) return '';
    let que = [];
    let res = ''
    que.push(root)
    while (que.length) {
        let node = que.shift();
        if (node) {
            res += `${node.val},`;
            que.push(node.left);
            que.push(node.right);
        }
        else res += '#,'
    }
    return res;
}

const deserialize = (str) => {
    let arr = str.split(',').filter(ele=> ele !== '');
    if(arr.length === 0) return null
    let root = new TreeNode(arr[0]);
    let que = [];
    que.push(root);
    for (let i = 1; i < arr.length; i++) {
        let parent = que.shift();
        if (arr[i] !== '#') {
            let left = new TreeNode(arr[i]);
            parent.left = left;
            que.push(left);
        }
        if (arr[++i] !== '#') {
            let right = new TreeNode(arr[i]);
            parent.right = right;
            que.push(right);
        }
    }
    return root;
}
