/**
 * 排序链表
 * https://leetcode.cn/problems/sort-list/description/?envType=study-plan-v2&envId=top-100-liked
 * 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 * 归并排序
 * @param head 
 */
function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    const mid = getMid(head);
    const left = sortList(head);
    const right = sortList(mid);
    return merge(left, right);
};

function getMid(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    const mid = slow!.next;
    slow!.next = null;
    return mid;
}

function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let cur = dummy;
    while (left && right) {
        if (left.val <= right.val) {
            cur.next = left;
            left = left.next;
        } else {
            cur.next = right;
            right = right.next;
        }
        cur = cur.next!;
    }
    cur.next = left || right;
    return dummy.next;
}