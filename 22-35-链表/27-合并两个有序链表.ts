/**
 * 合并两个有序链表
 * https://leetcode.cn/problems/merge-two-sorted-lists/?envType=study-plan-v2&envId=top-100-liked
 * 
 */
import { ListNode } from './ListNode';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head: ListNode | null = new ListNode()
  let cur: ListNode | null = head
  while(list1 !== null && list2 !== null) {
    if(list1.val < list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }
  while(list1 !== null) {
    cur.next = list1
    list1 = list1.next
    cur = cur.next
  }
  while(list2 !== null) {
    cur.next = list2
    list2 = list2.next
    cur = cur.next
  }

  return head.next    
};