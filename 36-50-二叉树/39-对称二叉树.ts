/**
 * 对称二叉树
 * https://leetcode.cn/problems/symmetric-tree/?envType=study-plan-v2&envId=top-100-liked
 * @param root 
 */
function isSymmetric(root: TreeNode | null): boolean {
  if(!root) return true;
  return helper(root.left, root.right);
};

function helper(root1: TreeNode | null, root2: TreeNode | null) : boolean {
  if(root1 === null && root2 === null) return true;
  if(root1 === null || root2 === null) return false;
  return root1.val === root2.val && helper(root1.left, root2.right) && helper(root1.right, root2.left);
}