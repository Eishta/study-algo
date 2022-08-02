class Queue {
    constructor() {
        this.s = [];
    }
    enqueue(data) {
        this.s.push(data);
    }
    dequeue() {
        if (!this.s.length) return 'Queue is Empty';
        let x = this.s.pop();
        if (this.s.length === 0) return x;
        // recursively call dequeue => not run for the 1st element
        item = this.dequeue();
        this.s.push(x);
        return item;
    }
    peek() {
        return this.s && this.s[0];
    }
    isEmpty() {
        return this.s.length === 0;
    }
}