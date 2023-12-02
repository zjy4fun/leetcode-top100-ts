/**
 * 两两交换链表中的相邻节点
 * https://leetcode.cn/problems/swap-nodes-in-pairs/?envType=study-plan-v2&envId=top-100-liked
 * 
 * @param head 
 */
import { ListNode } from './ListNode';

function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    const dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let cur = head;
    while(cur && cur.next) {
        const next = cur.next;
        cur.next = next.next;
        next.next = cur;
        prev.next = next;
        prev = cur;
        cur = cur.next!;
    }
    return dummy.next;
};