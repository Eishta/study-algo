// Two sum in BST 
// Brute force=> store inorder => sorted 
// use 2 pointer
// T = > O(N), S=> O(N)

// we can use BST iterator such that we can do before to get the elements from end and next to get the eleemnts from front

// reverse = true means  before() - get from the back
// reverse = false means  next()- get from the front

class BSTIterator{
    constructor(root, isReverse){
        this.stack = [];
        this.reverse = isReverse;
        this.pushAll(root)
    }
    hasElement(){
        return !this.stack.length
    }
    next(){
        let node = this.stack.pop();
        if(this.reverse){
            this.pushAll(node.left);
        }else this.pushAll(node.right);
        return node.val;
    }
    pushAll(root){
        while(root){
            this.stack.push(node);
            if(this.reverse){
                node = node.right;
            }
            else node = node.left;
        }
    }
}

const twoSum = (root, k)=> {
    let l = new BSTIterator(root, false);
    let r = new BSTIterator(root, true);

    let a = l.next();
    let b = r.next();

    while(a<b){
        if(a+b === k)return true;
        if(a+b < k) i = i.next();
        else j = j.next();
    }
    return false;
}