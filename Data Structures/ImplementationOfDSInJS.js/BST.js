// Trees (with some ordering e.g., BST) provide moderate access/search (quicker than Linked List and slower than arrays). 
// Trees provide moderate insertion/deletion (quicker than Arrays and slower than Unordered Linked Lists).

// APPLICATIONS
// Routing, searching a word exists using Trie, File Storage Sytem, etc
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
}