class MaxHeap {
    constructor() {
        this.heap = []
    }
    heapify(i) {
        let size = this.heap.length;
        let largest = i;
        let left = (2 * i) + 1;
        let right = (2 * i) + 2;
        if (left < size && this.heap[left] > this.heap[largest]) {
            largest = left
        }
        if (right < size && this.heap[right] > this.heap[largest]) {
            largest = right
        }
        if (largest !== i) {
            // swap
            let temp = this.heap[largest];
            this.heap.set(largest, this.heap[i]);
            this.heap.set(i, temp);
            this.heapify(this.heap, largest);
        }
        // O(logn)
    }
    insert(num) {
        this.heap.push(num);
        let size = this.heap.length;
        if (size !== 0) {
            for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
                this.heapify(i);
            }
        }
        // O(logn)
    }
    delete(num) {
        for (let i = 0; i < this.heap.length; i++) {
            if (num === this.heap[i]) break;
        }
        // swap with the last element
        let size = this.heap.length;
        [this.heap[i], this.heap[size - 1]] = [this.heap[size - 1], this.heap[i]]
        this.heap.pop();
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapify(i);
        }
        // O(logn)
    }
    heapSort() {
        let n = this.heap.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(i);
        }
        // swap the 1st element with the nth element
        for (let i = n - 1; i >= 0; i++) {
            [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]]
            this.heapify(i, 0); // i is sizde and 0 is i in heapify
        }
        // Best , worst , average complexity - O(nLogn)- heapify - O(logn), loop -> O(n)
    }
    getMax() {
        return this.heap[0]
    }
}