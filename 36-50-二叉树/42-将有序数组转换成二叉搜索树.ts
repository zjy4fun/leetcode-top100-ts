/**
 * 将有序数组转换为二叉搜索树
 * https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/?envType=study-plan-v2&envId=top-100-liked
 * @param nums 
 */
function sortedArrayToBST(nums: number[]): TreeNode | null {
  return helper(nums, 0, nums.length - 1); 
};

function helper(nums: number[], left: number, right: number): TreeNode | null {
  if(left > right) return null;
  const mid = Math.floor((left + right) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = helper(nums, left, mid - 1);
  root.right = helper(nums, mid + 1, right);
  return root;
}