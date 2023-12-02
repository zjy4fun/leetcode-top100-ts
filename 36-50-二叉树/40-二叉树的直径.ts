/**
 * 二叉树的直径
 * https://leetcode.cn/problems/diameter-of-binary-tree/?envType=study-plan-v2&envId=top-100-liked
 * @param root 
 */
function diameterOfBinaryTree(root: TreeNode | null): number {
    let res: number = 0;
    function dfs(root: TreeNode | null): number {
      let left = 0, right = 0;
      if(root.left) {
        left = dfs(root.left) + 1;
      }
      if(root.right) {
        right = dfs(root.right) + 1;
      }
      res = Math.max(res, left + right);
      return Math.max(left, right);
    }
    dfs(root);
    return res;
};