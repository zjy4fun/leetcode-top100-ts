/**
 * 两数相加
 * https://leetcode.cn/problems/add-two-numbers/?envType=study-plan-v2&envId=top-100-liked
 */
import { ListNode } from "./ListNode";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let remainder = 0;
    const dummy = new ListNode()
    let cur = dummy
    while(l1 !== null || l2 !== null) {
        let sum = remainder
        if(l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }
        if(l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }
        remainder = Math.floor(sum / 10)
        cur.next = new ListNode(sum % 10)
        cur = cur.next
    }
    if(remainder > 0) {
        cur.next = new ListNode(remainder)
    }
    return dummy.next
};