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

// this is a complex version of queeu implemnetation with 2 stacks

class Queue {
    constructor() {
        this.s1 = []
        this.s2 = []
    }
    enque(ele) {
        this.s1.push(ele);
    }
    // dequue is heavy here
    deque() {
        if (this.isEmpty()) return 'Underflow';
        else if (!this.s2.length && this.s1.length) {
            while (this.s1.length) {
                this.s2.push(this.s1.pop());
            }
            return this.s2.pop();
        }
        else return this.s2.pop();
    }
    isEmpty() {
        return !this.s1.length && !this.s2.length;
    }
    printQueue() {
        if (this.isEmpty()) return 'Queue is Empty';
        else if (this.s2.length) {
            for (let i = this.s2.length - 1; i >= 0; i--) {
                console.log(this.s2[i]);
            }

        }
        if (this.s1.length) {
            for (let i = 0; i < this.s1.length; i++) {
                console.log(this.s1[i]);
            }
        }

    }
    getFirstElement() {
        if (this.isEmpty()) return 'Underflow';
        else if (this.s2.length) {
            return this.s2[this.s2.length - 1];
        }
        else if (this.s1.length) {
            return this.s1[0];
        }
    }
    getLastElement() {
        if (this.isEmpty()) return 'Underflow';
        else if (this.s1.length) {
            return this.s1[this.s1.length - 1];
        }
        else if (this.s2.length) {
            return this.s2[0];
        }
    }
    size() {
        if (this.isEmpty()) return 0;
        else {
            return this.s1.length + this.s2.length;
        }
    }
    search(item) {
        if (this.s1.length) {
            for (let ele of this.s1) {
                if (ele === item) return true
            }
            return false
        } else return false;
    }
}

let que = new Queue();
que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
que.printQueue(); // 1 2 3
que.getFirstElement(); // 1
que.getLastElement(); // 3
que.dequeue(); // 1
que.isEmpty(); // false
que.dequeue(); // 2
que.dequeue(); // 3
que.isEmpty(); // true


