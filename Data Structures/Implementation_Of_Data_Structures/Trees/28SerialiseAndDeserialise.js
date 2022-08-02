
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
    console.log(str)
    let arr = str.split(',').filter(ele=> ele !== '');
    console.log(arr)
    if(arr.length === 0)return null
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

// call -> deserialize(serialize(root))
// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]