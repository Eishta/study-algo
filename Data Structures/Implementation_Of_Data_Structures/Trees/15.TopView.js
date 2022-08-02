// Top View - What we are able to see if we watch from the top 
// Approach -> it will be the first  element of each vertical level 
// we maintain a map, in map for each vlevel we only store teh first element and then dont update it
// why recursion wont work here? => because it might not cover the nodes level wise and some other node at a lower level may get into map 
// for recursive approach , we need to mainatin a height along with the vlevel and update teh map whenever a node with lower height is found 
class QObj {
    constructor(node, vlevel) {
        this.vlevel = vlevel;
        this.node = node;
    }
}

const topView = (root) => {
    if (!root) return [];
    let res = [], que = [], map = new Map();
    que.push(new QObj(root, 0));
    while (que.length) {
        let temp = que.shift();
        let { node, vlevel } = temp;
        if (!map.has(vlevel)) {
            map.set(vlevel, node.val)
        }
        if (node.left) que.push(new QObj(node.left, vlevel - 1));
        if (node.right) que.push(new QObj(node.right, vlevel + 1));
    }
    [...map].sort((a, b) => a[0] - b[0]).forEach(ele => {
        res.push(ele[1])
    })
}
