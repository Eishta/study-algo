// 1. Hashing Approch
// T{n}= O(n)  S{n}= O(n)
let detectLoop=(head)=>{
    let set = new Set();
    while(head){
        if(set.has(head))return true;
        set.add(head);
        head=head.next;
    }
    return false;
}

// 2.Without hasmap=> S{n}= O(1), T{n}= O(n)
// set a flag with each linkedList node

class Node{
    constructor(data){
        this.data= data;
        this.next = null;
        this.flag = false;
    }
}
// every time a node is traversed , mark the flag = true
let detectLoop = (head)=>{
    while(head){
        if(head.flag)return true;
        head.flag = true;
        head = head.next;
    }
    return false;
}

// 3. Floyd Cycle-Finding Algorithm(Tortoise and hare)
// Traverse linked list using two pointers.
// Move one pointer(slow_p) by one and another pointer(fast_p) by two.
// If these pointers meet at the same node then there is a loop. 
// If pointers do not meet then linked list doesn’t have a loop. 


let detectLoop=(head)=>{
    let slow=head , fast = head;
    while(slow && fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow===fast){
            return true;
        }
    }
    return false
}