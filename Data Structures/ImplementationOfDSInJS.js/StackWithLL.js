class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class stack {
    constructor() {
        this.top = null;
    }

    push(item) {
        let node = new Node(item);
        if (!this.top) {
            this.top = node;
        }
        else {
            node.next = this.top;
            this.top = node;
        }

    }
    pop() {
        if (!this.top) return 'Stack Underflow';
        else {
            let top = this.top;
            this.top = this.top.next;
            return top.data;
        }
    }
    peek() {
        if (this.top) return this.top.data;
        else return false;
    }
    isEmpty() {
        return !this.top;
    }
    size() {
        let cur = this.top, count = 0;
        while (cur) {
            count++;
            cur = cur.next;
        }
        return count;
    }
    search(item) {
        if (this.top) {
            let cur = this.top;
            while (cur) {
                if (cur.data === item) return true;
                cur = cur.next;
            }
            return false
        }
        return false;
    }
}