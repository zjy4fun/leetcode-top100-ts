/**
 * 合并K个升序链表
 * https://leetcode.cn/problems/merge-k-sorted-lists/description/?envType=study-plan-v2&envId=top-100-liked
 * @param lists 
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null;
    return merge(lists, 0, lists.length - 1);
};

function merge(lists: Array<ListNode | null>, left: number, right: number): ListNode | null {
    if (left === right) return lists[left];
    const mid = left + right >> 1;
    const l1 = merge(lists, left, mid);
    const l2 = merge(lists, mid + 1, right);
    return mergeTwoLists(l1, l2);
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let cur = dummy;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next!;
        } else {
            cur.next = l2;
            l2 = l2.next!;
        }
        cur = cur.next;
    }
    cur.next = l1 || l2; // love this line
    return dummy.next;
}
