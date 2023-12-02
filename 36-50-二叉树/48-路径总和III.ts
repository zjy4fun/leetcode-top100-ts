/**
 * 路径总和III
 * https://leetcode.cn/problems/path-sum-iii/description/?envType=study-plan-v2&envId=top-100-liked
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
  if(!root) return 0;
  return helper(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};

function helper(root: TreeNode | null, targetSum: number): number {
  if(!root) return 0;
  let res = 0;
  if(root.val === targetSum) res += 1;
  res += helper(root.left, targetSum - root.val);
  res += helper(root.right, targetSum - root.val);
  return res;
}