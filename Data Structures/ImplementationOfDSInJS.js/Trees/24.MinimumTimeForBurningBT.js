// burning the tree => visiting all the nodes 
// we can use the level order traversal such that at time 1 , we can burn a nodes left, right and parent


//Approach
/**
 * 1. markparents by using level traversal and a map that holds the parent of each node
 * 2. Level order traversal -> at each level there can be max 3 nodes burning -> left, right and parent
 *      we will travrse radially outwards by using the nodes left and right and the parent form the map 
 * 3. after traversing every level, if we burn any node of that level , we increase th etime 
 * 4. return the time 
 * 
 */

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

const minTimeForBurning = (root, node) => {
    if (!root) return null;
    let visited = new Map(), que = [], time = 0;
    let flag = 0;
    que.push(node);
    while (que.length) {
        let size = que.length;
        flag = 0;
        for (let i = 0; i < size; i++) {
            let ele = que.shift();
            if (ele.left && !visited[ele.left]) {
                flag = 1;
                que.push(ele.left);
                visited.set(ele.left, true);
            }
            if (ele.right && !visited[ele.right]) {
                flag = 1;
                que.push(ele.right);
                visited.set(ele.right, true);
            }
            let parent = map.get(ele);
            if (parent && !visited[parent]) {
                flag = 1;
                que.push(parent);
                visited.set(parent, true);
            }
        }
        if (flag) time++;
    }
    return time;
}