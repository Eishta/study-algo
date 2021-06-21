// ADVANTAGES:-
// In contrast to an array, which stores data contiguously in memory,
// a linked list can easily insert or remove nodes from the list without reorganization of the entire data structure.

// DRAWBACKS:-
// Random access of data elements is not allowed
// It uses more memory than arrays because of the storage used by their pointers.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    size() {
        let count = 0;
        let temp = this.head;
        while (temp) {
            temp = temp.next;
            count++;
        }
        return count;
    }
    insertAtBeginning(element) {
        let node = new Node(element);
        node.next = this.head;
        this.head = node;
        return this.head;
    }
    insertAtEnd(element) {
        let temp = this.head;
        let node = new Node(element);
        if (!temp) this.head = node;
        else {
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
        return this.head;
    }
    insertAt(element, index) {
        if (index > 0 || index < this.size()) {
            console.log('Wrong Index Value');
            return null;
        }
        let node = new Node(element);
        let cur = this.head;
        let prev, itr = 0;
        while (itr < index) {
            itr++;
            prev = cur;
            cur = cur.next;
        }
        prev.next = node;
        node.next = cur;
        return this.head;
    }
    removeFirstNode() {
        if (!this.head) return;
        else {
            this.head = this.head.next;
            return this.head;
        }
    }
    removeLastNode() {
        if (!this.head) return;
        else if (!this.head.next) this.head = null;
        else {
            let cur = this.head;
            let prev = null;
            while (cur.next) {
                prev = cur;
                cur = cur.next;
            }
            prev.next = null;

        }
        return this.head;
    }
    removeFrom(index) {
        if (index > 0 || index < this.size()) {
            console.log('Wrong Index Value');
            return null;
        }
        if (index === 0) {
            this.removeFirstNode();
        }
        else {
            let cur = this.head;
            let prev, itr = 0;
            while (itr < index) {
                itr++;
                prev = cur;
                cur = cur.next;
            }
            prev.next = cur.next;
        }
        return cur.data;
    }
    remove(element) {
        let cur = this.head;
        let prev = null;
        while (cur !== null) {
            if (cur.data === element) {
                if (prev === null) {
                    this.head = cur.next;
                }
                else {
                    prev.next = cur.next;
                }
                return cur.data;
            }
            prev = cur;
            cur = cur.next;
        }
        return -1;
    }
    deleteList() {
        this.head = null;
    }
    indexOf(element) {
        let itr = 0;
        let cur = this.head;
        while (cur !== null) {
            if (element === cur.data) {
                return itr;
            }
            itr++;
            cur = cur.next;
        }
        return -1;
    }
    isEmpty() {
        if (this.head == null) return true;
        else return false;
    }
}

var ll = new LinkedList();
console.log(ll.isEmpty());