/**
 * 环形链表
 * https://leetcode.cn/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-100-liked
 */
function hasCycle(head: ListNode | null): boolean {
  // 快慢指针
  let fast = head, slow = head;
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow!.next;
    if(fast === slow) return true;
  }
  return false;
};