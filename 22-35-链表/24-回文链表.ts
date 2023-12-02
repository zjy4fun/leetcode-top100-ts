/**
 * 回文链表
 * https://leetcode.cn/problems/palindrome-linked-list/description/?envType=study-plan-v2&envId=top-100-liked
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

let frontPointer: ListNode | null;

function isPalindrome(head: ListNode | null): boolean {
    frontPointer = head;
    return recusivelyCheck(head);
};

const recusivelyCheck = (currentNode: ListNode | null): boolean => {
  if(currentNode === null) return true;
  if(!recusivelyCheck(currentNode.next)) return false;
  if(currentNode.val !== frontPointer.val) return false;
  frontPointer = frontPointer?.next;
  return true;
}