/**
 * 反转链表
 * https://leetcode.cn/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=top-100-liked
 * 
 */

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// 迭代
// function reverseList(head: ListNode | null): ListNode | null {
//   let pre: ListNode | null = null, cur = head;
//   while(cur !== null) {
//     const next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }
//   return pre;
// };

// 递归
function reverseList(head: ListNode | null): ListNode | null {
  if(head === null || head.next === null) return head;
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}