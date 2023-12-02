/**
 * 随机链表的复制
 * https://leetcode.cn/problems/copy-list-with-random-pointer/?envType=study-plan-v2&envId=top-100-liked
 * @param head 
 */
function copyRandomList(head: Node | null): Node | null {
    if (!head) return head;
    const map = new Map<Node, Node>();
    let cur = head;
    while (cur) {
        map.set(cur, new Node(cur.val));
        cur = cur.next!;
    }
    cur = head;
    while (cur) {
        const node = map.get(cur)!;
        node.next = map.get(cur.next!) || null;
        node.random = map.get(cur.random!) || null;
        cur = cur.next!;
    }
    return map.get(head)!;
};