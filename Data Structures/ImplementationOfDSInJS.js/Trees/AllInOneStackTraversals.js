// Preorder, inorder, postorder traversals using one stack

// Here we will use an extra info - number that will indicate the order that will be processed
// 

/**
 * Here we will use an extra info - number that will indicate the order that will be processed
 * 1- preorder, 2- inorder, 3- postorder
 * 
 * initially store the root with in stack num = 1, 
 * loop till the stack is empty
 * if the node has num = 1
 *  => push the val in the preorder, increment the num to 2, push the node in stack again , check if the node has a left , if yes, then push the left also with num = 1
 * if the node has num = 2
 *  =>  push the val in the inorder, increment the num to 3, push the node in stack again , check if the node has a right , if yes, then push the right also with num = 1
 * if the num = 3
 *  => push the val in the postorder and the node is finally removed form the stack
 */

const preInPostOrder = (root) => {
    if (!root) return;
    let pre = [], inorder = [], post = [], stack = [];
    stack.push([root, 1]);
    while (stack.length) {
        let node = stack.pop();
        if (node[1] == 1) {
            pre.push(node[0].data);
            node[1]++;
            stack.push(node);
            node[0].left && stack.push([node[0].left, 1])
        }
        else if (node[1] === 2) {
            inorder.push(node[0].data)
            node[1]++;
            stack.push(node);
            node[0].right && stack.push([node[0].right, 1])
        }
        else {
            post.push(node[0].data)
        }
    }
    return [pre, inorder, post];
}