/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  Input: head = [1,2,3,4,5], k = 2
//  Output: [2,1,4,3,5]
var reverseKGroup = function (head, k) {
    let preHead = new ListNode(0, head);
    let tail = preHead;
    let start, end;
    let next = head;

    while (next !== null) {
        start = next, end = next;
        for (let i = 1; i < k; i++) {
            if (end == null) break;
            end = end?.next;
        }
        if (end == null) {
            tail.next = start;
            return preHead?.next;
        }
        next = end?.next;
        reverse(start, end);
        tail.next = end;
        tail = start;
    }
    return preHead.next;
};
var reverse = function (start, end) {
    let prev, stop = end?.next, cur = start;
    while (cur !== stop) {
        let next = cur?.next;
        cur.next = prev || null;
        prev = cur;
        cur = next;
    }
}