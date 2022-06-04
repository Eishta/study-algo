// Brute force -> get the inorder -> O(N)
// -> Sort the inorder -> O(NLogN)
// -> traverse the tree and compare the nodes with inorder sorted -> O(N)
// Time = 2O(N) + O(NLogN)
// Space = O(N) => for inorder storing

// 2. There can be 2 cases => the swapped elements are adjacent to each other 
// or they are not adjacent 


// example-> [3,2,1] => it should be => [1,2,3] so 1 and 3 are sorted => not adjacent
// 2. Adjacent swap 1 and 2 => [2,1,3]

// we will do the inorder traversal 
// we would need three variables to store => first => first element that does not foolow BST rules
// middle => in case the swapped element id adjacent to first
// last => if we find another element not follwing rules in the remaining elements 

// if first and last both are there swap them else swap first and middle

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
    if(!root)return null;
    let first, middle, last, prev;
    
    function inorder(root){
        if(!root) return;
        inorder(root.left)
        if(prev && prev.val > root.val){
            if(first && middle){
                last = root;
            }
            else {
                first = prev;
                middle = root;
            }
        }
        prev = root;
        inorder(root.right);
    }
    inorder(root);
    // swap 
    if(last){
        // swap first and last 
        let t = first.val;
        first.val = last.val;
        last.val = t;
    }
   else {
        // swap first and middle 
        let t = first.val;
        first.val = middle.val;
        middle.val = t
   }
  
};

