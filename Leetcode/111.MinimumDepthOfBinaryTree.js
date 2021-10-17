let minDepth = root => {
    if (!root) return 0;
    else {
        let depth = 1;
        let q = [root];
        while (q.length) {
            let l = q.length;
            for (let i = 0; i < l; i++) {
                let node = q.shift();
                // when both left and right of node are null => leaf node 
                if (!node.left && !node.right) return depth;
                node.left && q.push(node.left);
                node.right && q.push(node.right);
            }
            depth++;
        }
        return depth
    }
}

let minDepth = root => {
    if (!root) return 0;
    let l = minDepth(root.left);
    let r = minDepth(root.right);
    return !(l && r) ? l + r + 1 : Math.min(l, r) + 1;
}

let minDepth = root => {
    if(!root)return 0;
    let l = root.left?  minDepth(root.left): 0;
    let r = root.right ? minDepth(root.right) : 0;
    return !(l && r) ? l + r + 1 : Math.min(l, r) + 1;
}