/**
 * 翻转二叉树
 * https://leetcode.cn/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root) return null;
    const left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);
    return root;
};