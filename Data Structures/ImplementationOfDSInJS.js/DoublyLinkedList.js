class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DLinkedList {
    constructor() {
        this.head = null;
    }
    size() {
        let cur = this.head;
        let count = 0;
        while (cur) {
            count++;
            cur = cur.next;
        }
        return count;
    }
    insertAtBeginning(element) {
        let newNode = new Node(element);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        return this.head;
    }
    insertAtEnd(element) {
        let newNode = new Node(element);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.prev = temp;
        }
        return this.head;

    }
    // insert at given index
    insertAt(ele, index) {
        if (index === 0) {
            this.insertAtBeginning(ele);
        }
        else {
            let newNode = new Node(ele);
            let count = 0, temp = this.head;
            while (count < index) {
                count++;
                temp = temp.next;
            }
            newNode.prev = temp.prev;
            newNode.next = temp;
            temp.prev.next = newNode;
            temp.prev = newNode;
        }
        return this.head;
    }
    // insert before a given element
    insertBefore(ele, nextNode) {
        if (nextNode === null) return;
        else {
            let node = new Node(ele);
            nextNode.prev ? (nextNode.prev.next = node, node.prev = nextNode.prev) : (this.head = node);
            nextNode.prev = node;
            node.next = nextNode;

        }
        return this.head;
    }
    insertAfter(ele, prevNode) {
        if (prevNode === null) return;
        else {
            let node = new Node(ele);
            node.prev = prevNode;
            prevNode.next && (node.next = prevNode.next, prevNode.next.prev = node);
            prevNode.next = node;
        }
        return this.head;
    }
    removeFirstNode() {
        if (!this.head) return null;
        let temp = this.head;
        temp.next.prev = null;
        this.head = temp.next;
        return this.head;
    }
    removeLastNode() {
        if (!this.head) return null;
        else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.prev.next = null;
        }
        return this.head;
    }
    removeFrom(index) {
        if (index < 0 || index > this.size()) return;
        else {
            let temp = this.head, count = 0;
            while (count < index) {
                temp = temp.next;
                count++;
            }
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
        }
        return temp.data;
    }
    removeElement(ele) {
        if (!this.head) return;
        else if (this.head.data === ele) { }
        else {
            let temp = this.head;
            while (temp) {
                if (temp.data === ele) {
                    temp.prev && (temp.prev.next = temp.next ? temp.next : null);
                    temp.next && (temp.prev ? (temp.next.prev = temp.prev) : (temp.next.prev = null, this.head = temp.next));
                    return temp.data;
                }
                temp = temp.next;
            }
            return -1;
        }
    }
    deleteList() {
        this.head = null;
    }
    deleteNode(node) {
        if (!this.head || !node) return;
        else {
            if (node.prev) {
                if (node.next) {
                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                }
                else {
                    node.prev.next = null;
                }
            }
            else {
                if (node.next) {
                    node.next.prev = null;
                    this.head = node.next;
                }
                else {
                    this.head = null;
                }
            }
        }
    }
    indexOF(ele) {
        if (!this.head) return null;
        else {
            let temp = this.head;
            let count = 0
            while (temp) {
                count++;
                if (temp.data == ele) {
                    return count;
                }
            }
        }
    }
    isEmpty() {
        return this.head === null;
    }
    print() {
        if (!this.head) {
            console.log("List is Empty");
            return;
        }
        else {
            let temp = this.head;
            while (temp) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }
}