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
    getSizeRecursive(node) {
        if (node == null) return 0;
        return 1 + this.getSizeRecursive(node.next)
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
    // Add a node after a given node:
    insertAfterNode(prev, element) {
        if (prev == null) {
            console.log('The given previous node cannot be null');
            return;
        }
        let node = new Node(element);
        node.next = prev.next;
        prev.next = node;
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
    getNthNodeRecur(head, n) {
        if (head === null) return -1;
        // if n equal to 0 return node.data
        if (n === 0) return head.data;
        // recursively decrease n and increase
        // head to next pointer
        return this.getNthNodeRecur(head.next, n - 1)
    }
    printNthNodeFromEnd(n) {
        let p = this.head, c = this.head;
        let count = 0;
        if (this.head) {
            while (count < n && c != null) {
                count++;
                c = c.next;
            }
            if (c == null && count < n) {
                return `the list does not contain ${n} elements`
            }
            else if (c == null) {
                return this.head.data;
            }
            while (c != null) {
                c = c.next;
                p = p.next;
            }
            return p.data
        }
    }
    deleteNthNodeFromEnd(n) {
        let p = this.head, c = this.head, count = 0;
        if (this.head) {
            while (count < n) {
                count++;
                c = c.next;
            }
            // when c is at null, we are at the desired node i.e. the nth node from the end when we start c from head
            if (c === null) {
                console.log('deleted', this.head.data)
                this.head = this.head.next; // we have to delete the head
            }
            // we want to reach the node prev to the desired node- nth node from end so we want to react n-1th node from end
            while (c.next) {
                c = c.next;
                p = p.next;
            }
            console.log('deleted', p.next.data)
            let next = p.next.next;
            p.next.next = null;
            p.next = next;
            return this.head;
        }
    }
    printTheMiddle2Pointer() {
        let slow = this.head, fast = this.head;
        if (this.head) {
            while (fast && fast.next) {
                fast = fast.next.next;
                slow = slow.next;
            }
        }
        return slow.data;
    }
    printTheMiddle1Pointer() {
        let count = 0, mid = this.head, ref = this.head;
        if (ref) {
            while (ref != null) {
                if ((count % 2) === 1) {
                    mid = mid.next;
                }
                ++count;
                ref = ref.next;
            }
        }
        return mid.data;
    }
    countTheNumberRecursive(head, num) {
        if (head == null) return 0;
        else if (head.data === num) return 1 + this.countTheNumberRecursive(head.next, num);
        else return this.countTheNumberRecursive(head.next, num);
    }
    hasLoop() {
        // we can also use a hash set , if it already has a node ref, then return true else false
        // 2 pointer approach - Floyd’s Cycle detection algorithm
        let slow = this.head, fast = this.head;
        while (slow && fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                console.log(true)
                this.removeLoop(slow, this.head);
            };
        }
        return false;
    }
    removeLoop(node, head) {
        let slow = head;
        let fast = node;
        if (slow !== fast) { // if not the first element that starts the loop
            while (slow.next !== fast.next) {
                slow = slow.next;
                fast = fast.next;
            }
            fast.next = null;
        }
        else {
            while (fast.next != slow) {
                fast = fast.next;
            }
            fast.next = null;
        }
    }
}

var ll = new LinkedList();
console.log(ll.isEmpty());
ll.insertAtBeginning(2)
ll.insertAtBeginning(3)
ll.insertAtBeginning(4)
ll.insertAtBeginning(3)
ll.insertAtBeginning(2)
ll.countTheNumberRecursive(ll.head, 3); // 2
