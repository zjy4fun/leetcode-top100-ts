/**
 * 验证二叉搜索树
 * https://leetcode.cn/problems/validate-binary-search-tree/description/?envType=study-plan-v2&envId=top-100-liked
 */

function isValidBST(root: TreeNode | null): boolean {
    return helper(root, null, null);
}

function helper(root: TreeNode | null, min: number | null, max: number | null): boolean {
    if(!root) return true;
    if(min !== null && root.val <= min) return false;
    if(max !== null && root.val >= max) return false;
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}