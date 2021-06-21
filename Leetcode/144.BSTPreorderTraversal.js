/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

let preorder = root =>{
    let stack = [], list=[], node = root;
    while(node){
        node.val && list.push(node.val);
        node.right && stack.push(node.right);
        node = node.left || stack.pop();
    }

    return list;
}


// SEcond
let preorder2= root=>{
    let stack = [], list=[], current = root;
        while(current || stack.length){
        if(current){
            list.push(current.val);
            stack.push(current.right);
            current = current.left;
        }
        else{
            current = stack.pop()
        }
    }
    return list;
}