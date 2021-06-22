// Queue = FIFO 
// queue.enqueue(1),queue.enqueue(2),queue.enqueue(3) = [1,2,3]
// queue.dequeue() = 1 , [2,3]
// queue.dequeue() = 2 , [3]
// queue.dequeue() = 3 , []
// Stack = FILO
// stack.push(1),stack.push(2),stack.push(3) = [1,2,3]
// stack.pop() = 3 , [1,2]
// stack.pop() = 2 , [1]
// stack.pop() = 1 , []


class Queue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }
    // enqueue is a costly function here
    enqueue(data) {
        this.s1.push(data);
    }
    dequeue() {
        if (!this.s1.length && !this.s2.length) return 'Queue is Empty';
        else if (!this.s2.length && this.s1.length) {
            while (this.s1.length) {
                this.s2.push(this.s1.pop())
            }
            return this.s2.pop()
        }
        else return this.s2.pop();
    }
    peek() {
        if (!this.s1.length) return 'Queue is Empty';
        else if (!this.s2.length && this.s1.length) {
            return this.s1[0];
        }
        else {
            return this.s2[this.s2.length - 1];
        }
    }
    isEmpty() {
        return this.s1.length === 0 && this.s2.length === 0;
    }
}