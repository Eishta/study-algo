// This means having a vertical line drawn on the nodes
// We maintain a pattern -> start with vlevel = 0 for root, 
// if we move to left vlevel = vlevel - 1 
// if we move to right vlevel = vlevel + 1

// so we need to travers e the tree -> we wil use level order traversal here
// we need to mainatain a map => why ? -> so that for each vlevel as key we have a corresponding value of array keeping the track of nodes on that vertical line
// where vlevel denotes the vertical line

class QObj {
    constructor(node, vlevel) {
        this.vlevel = vlevel;
        this.node = node;
    }
}
const verticalTraversal = (root) => {
    if (!root) return [];
    let res = [], map = new Map();
    let que = [];
    que.push(new QObj(root, 0));
    while (que.length) {
        let temp = que.shift();
        let { node, vlevel } = temp;
        if (map.has(vlevel)) {
            let ele = map.get(vlevel);
            ele.push(node.val);
            map.set(vlevel, ele);
        }
        else {
            let ele = [];
            ele.push(node.val);
            map.set(vlevel, ele);
        }
        if (node.left) que.push(new QObj(node.left, vlevel - 1));
        if (node.right) que.push(new QObj(node.right, vlevel + 1));
    }
    // // when response is an array of arrays
    // [...map].sort((a,b)=>a[0] - b[0]).forEach(ele=> res.push(ele[1])); // if level wise 

    // when response is a single array of values 
    [...map].sort((a, b) => a[0] - b[0]).forEach(ele => {
        let arr = ele[1];
        for (let key of arr) {
            res.push(key);
        }
    })
}

