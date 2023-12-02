/**
 * K 个一组翻转链表
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/?envType=study-plan-v2&envId=top-100-liked
 */
import ListNode from "./ListNode";
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let end = dummy;
    while (end.next) {
        // 1. end 指向第 k 个节点
        for (let i = 0; i < k && end; i++) {
            end = end.next;
        }
        if (!end) break;
        // 2. start 指向第 k 个节点的下一个节点
        const start = prev.next;
        const next = end.next;
        end.next = null;
        prev.next = reverse(start);
        start.next = next;
        // 3. 重置 prev 和 end
        prev = start;
        end = prev;
    }
    return dummy.next;
};

function reverse(head: ListNode | null): ListNode | null {
    let pre = null;
    let cur = head;
    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}