// we need to maintain a level or distance when we move outwards from the given node 
// we will do a level order traversal to get all the nodes at distance k in the same level


// mark the parent pointers to move up from the given node
// keep a visited map , queue,and a distance variable, the time the distance == k , return the elements in the queue;

// markparents, then LOT , put the left , right and paremt of a node in visited and do dist++. the moment dist == k return the elements in the queue

const markParents = (root, map) => {
    if (!root) return;
    let que = [];
    que.push(root);
    while (que.length) {
        let node = que.shift();
        if (node.left) {
            map.set(node.left, node);
            que.push(node.left);
        }
        if (node.right) {
            map.set(node.right, node);
            que.push(node.right);
        }
    }
}
const printNodes = (root, node, k) => {
    if (!root || !node) return;
    let map = new Map();

    markParents(root, map);

    let que = [], visited = new Map(), res = [];
    que.push(node);
    visited.set(node, true);
    let dist = 0;
    while (que.length) {
        let size = que.length;
        if (dist == k) break;
        for (let i = 0; i < size; i++) {
            let ele = que.shift();
            // get the left, right and parent of the ele and push them in que and visited if they are not yet visited
            if (ele.left && !visited.get(ele.left)) {
                que.push(ele.left);

                visited.set(ele.left, true)
            }
            if (ele.right && !visited.get(ele.right)) {
                que.push(ele.right);

                visited.set(ele.right, true)
            }
            let parent = map.get(ele);
            if (parent && !visited.get(parent)) {
                que.push(parent);

                visited.set(parent, true)
            }
        }
        dist++;
    }
    for (let i = 0; i < que.length; i++) {
        res.push(que[i].val);
    }
    return res
}