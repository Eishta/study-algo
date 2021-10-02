// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.
var mergeKLists = function (lists) {
    let flat = [];
    for (let list of lists) {
        var temp = list;
        while (temp != null) {
            flat.push(temp.val);
            temp = temp.next;
        }
    }
    flat.sort((a, b) => a - b);
    if (!flat.length) return null;
    let head = new ListNode(flat[0]);
    let tail = head;

    for (let ele of flat.slice(1)) {
        tail.next = new ListNode(ele);
        tail = tail.next;
    }
    return head;
};