class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(data) {
        let node = new Node(data);
        if (this.rear) {
            this.rear.next = node;
            this.rear = node;
        }
        else this.rear = this.front = node;
    }
    dequeue() {
        if (this.front) {
            let temp = this.front.data;
            this.front = this.front.next;
            return temp;
        }
        else {
            this.front = this.rear = -1;
            return null};
    }
    isEmpty() {
        return this.front === -1 && this.rear === -1
    }
    peek() {
        return this.front ? this.front.data : null;
    }
    length() {
        let current = this.front, count = 0;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}