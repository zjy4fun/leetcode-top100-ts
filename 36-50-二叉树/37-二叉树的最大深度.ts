/**
 * 二叉树的最大深度
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked
 */
function maxDepth(root: TreeNode | null): number {
    if (!root)
        return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
