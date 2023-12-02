/**
 * 子集
 * https://leetcode.cn/problems/subsets/?envType=study-plan-v2&envId=top-100-liked
 */
function subsets(nums: number[]): number[][] {
  const ans: number[][] = [];
  const dfs = (idx: number, subset: number[]) => {
    if (idx == nums.length) {
      ans.push(subset.slice());
      return;
    }
    subset.push(nums[idx]);
    dfs(idx + 1, subset);
    subset.pop();
    dfs(idx + 1, subset);
  };
  dfs(0, []);
  return ans;  
};