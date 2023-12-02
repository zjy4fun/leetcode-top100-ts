/**
 * 相交链表
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/description/?envType=study-plan-v2&envId=top-100-liked
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let p1 = headA, p2 = headB;
  while(p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }
  return p1;
};