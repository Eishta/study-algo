
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

 let kthSmallest = (root, k) => {
    if(!root) return null;
    let count = 0; let stack = [];
    while(root || stack.length){
        if(root){
            stack.push(root);
            root= root.left;
        }
        else {
            root = stack.pop();
            count ++;
            console.log(root.val);
            if(count === k) break;
            root = root.right;
        }
    }
    return root.val;

}
