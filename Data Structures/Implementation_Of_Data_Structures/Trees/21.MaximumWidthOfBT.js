// to find the maximum width => the number of nodes between the first and last node on the last level 
// we can index the levels in such a way that the indexing starts from 1 
// we will use the 1 based indexing in trees => if i is the index of root => left = (2*i) + 1, rigth = (2 * i) + 2

// to remove the overflow issue , if we have a height of 10 ^ 5 in case of skewed tree, we will find the min index in that level and subtract each level from it to find the iondex of the children
// so now let i is index of the parent and min be the in index in the level of parent node
// then left = (2 * (i-min)) + 1, right = (2 * (i-min)) + 2

// we will maintain two vars , one for the first index of level and one for the last index of each level , after each level is traversed , we will comapre last - first + 1 and the max till now and keep the maximum of them

// we will do proper level order traversal here
// our purpose in indexing is to make the first index = 0 at each iteration

class QObj {
    constructor(index, node) {
        this.index = index;
        this.node = node;
    }
}

/**
 * @param {*} root => the root node of the tree
 * @returns res => the max width of the tree
 */
function maxWidth(root) {
    if (!root) return 0;
    let que = [], res = 0, first = 0, last = 0;
    que.push(new QObj(0, root));
    while (que.length) {
        let size = que.length;
        let min_index = que[0].index; // 0 in this case 
        for (let i = 0; i < size; i++) {
            let obj = que.shift();
            let { index, node } = obj;
            let curIn = index - min_index; // to avoid the overflow
            if (i == 0) first = curIn;
            if (i == size - 1) last = curIn;

            if (node.left) que.push(new QObj((2 * curIn) + 1, node.left));
            if (node.right) que.push(new QObj((2 * curIn) + 2, node.right));
        }
        res = Math.max(res, last - first + 1);
    }
    return res;
}
