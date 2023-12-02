/**
 * 二叉树展开为链表
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-100-liked
 */
function flatten(root: TreeNode | null): void {
    if(!root) return;
    flatten(root.left);
    flatten(root.right);
    let left = root.left;
    let right = root.right;
    root.left = null;
    root.right = left;
    let p = root;
    while(p.right) p = p.right;
    p.right = right;    
};
