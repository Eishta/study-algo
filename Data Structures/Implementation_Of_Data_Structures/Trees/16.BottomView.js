// Bottom view -> how a tree appears from the bottom -> last element of each vertical level
// we maintain a map, in map for each vlevel we only store and update the values for the key every time 
// so that at the end we will have the last elemet of the vertical line

class QObj {
    constructor(node, vlevel) {
        this.vlevel = vlevel;
        this.node = node;
    }
}

const bottomView = (root) => {
    if (!root) return [];
    let res = [], que = [], map = new Map();
    que.push(new QObj(root, 0));
    while (que.length) {
        let temp = que.shift();
        let { node, vlevel } = temp;
        // update the map everytime so that we get the last value-> bottom view 
        map.set(vlevel, node.val)
        if (node.left) que.push(new QObj(node.left, vlevel - 1));
        if (node.right) que.push(new QObj(node.right, vlevel + 1));
    }
    [...map].sort((a, b) => a[0] - b[0]).forEach(ele => {
        res.push(ele[1])
    })
}