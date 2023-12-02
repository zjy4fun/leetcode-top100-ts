/**
 * 删除链表的倒数第 N 个节点
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/?envType=study-plan-v2&envId=top-100-liked
 */
import { ListNode } from './ListNode';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode();
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    while (n--) {
        fast = fast.next!;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next!;
    }
    slow.next = slow.next!.next;
    return dummy.next;
};