// Serialise-> create a string out of the root and traverse it inorder

// const serialise = (root) => {
//     if (!root) return '#';
//     let que = [];
//     let res = ''
//     que.push(root)
//     while (que.length) {
//         let node = que.shift();
//         if (node) {
//             res += `${node.val},`;
//             que.push(node.left);
//             que.push(node.right);
//         }
//         else res += '#, '
//     }
//     return res;
// }


// // we maintain a queue to keep a track of the parent
// const deserialise = (str) => {
//     let arr = str.split(', ');
//     let root = new Node(arr[0]);
//     let que = [];
//     que.push(root);
//     for (let i = 1; i < arr.length; i++) {
//         let parent = que.shift();
//         if (arr[i] !== '#') {
//             let left = new Node(arr[i]);
//             parent.left = left;
//             que.push(left);
//         }
//         if (arr[++i] !== '#') {
//             let right = new Node(arr[i]);
//             parent.right = right;
//             que.push(right);
//         }
//     }
//     return root;
// }
var deserialize = function (data) {
    let dataArr = data.split('#').filter(el => el != '');
    let treeRoot = null;
    for (let i = 0; i < dataArr.length; i++) {
        treeRoot = insert(treeRoot, Number(dataArr[i]));
    }
    return treeRoot;
};
var insert = function (parent, value) {
    if (!parent) {
        return new TreeNode(value); //create treenode(build tree)
    }
    if (parent.val > value) {//go left branch
        parent.left = insert(parent.left, value);
    }
    else {
        parent.right = insert(parent.right, value);
    }
    return parent;
}

var serialize = function (root) {
    if (!root) return '';
    let que = [];
    let res = ''
    que.push(root)
    while (que.length) {
        let node = que.shift();
        if (node) {
            res += `#${node.val}`;
            que.push(node.left);
            que.push(node.right);
        }
    }
    return res.slice(1);
};