/**
 * 二叉树中的最大路径和
 * https://leetcode.cn/problems/binary-tree-maximum-path-sum/description/?envType=study-plan-v2&envId=top-100-liked
 */
function maxPathSum(root: TreeNode | null): number {
    let maxSum = Number.MIN_SAFE_INTEGER;
    function maxGain(node: TreeNode | null): number {
        if(!node) return 0;
        let leftSum = Math.max(maxGain(node.left), 0);
        let rightSum = Math.max(maxGain(node.right), 0);
        let curSum = node.val + leftSum + rightSum;
        maxSum = Math.max(maxSum, curSum);
        return node.val + Math.max(leftSum, rightSum);
    }
    maxGain(root);
    return maxSum;
};