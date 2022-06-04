// BST Iterator -> it has two functions -> next returns the next element of the inorder travsersal 
// hasnext tells is there are elements left to be traversed
// T() for next => O(1)
// Space => O(N) for stack



// Iterator => 
class BSTIterator{
    constructor(tree){
        this.stack = [];
        pushAllLeft(tree);
    }
    next(){
        let node = this.stack.pop();
        if(node.right){
            this.pushAllLeft(node.right)
        }
        return node.val;
    }
    hasNext(){
        return !!this.stack.length;
    }
    pushAllLeft(root){
        let node = root;
        while(node){
            this.stack.push(node);
            node = node.left;
        }
    }
}