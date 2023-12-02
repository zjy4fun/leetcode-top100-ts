/**
 * 环形链表II
 * https://leetcode.cn/problems/linked-list-cycle-ii/?envType=study-plan-v2&envId=top-100-liked
 * @param head 
 * @returns 
 */
import { ListNode } from './ListNode';
function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head, slow = head;
  let hasCycle = false;
  while(fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow) {
          hasCycle = true;
          break;
      }
  }
  if(hasCycle) {
      fast = head;
      while(fast !== slow) {
          fast = fast.next;
          slow = slow.next;
      }
      return fast;
  }
  return null;
};