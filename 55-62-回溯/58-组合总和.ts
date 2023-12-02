/**
 * 组合总和
 * https://leetcode.cn/problems/combination-sum/?envType=study-plan-v2&envId=top-100-liked
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];
  const dfs = (idx: number, sum: number, subset: number[]) => {
    if (idx == candidates.length) {
      return;
    }
    if (sum == target) {
      ans.push(subset.slice());
      return;
    }
    dfs(idx + 1, sum, subset);
    if (sum + candidates[idx] <= target) {
      subset.push(candidates[idx]);
      dfs(idx, sum + candidates[idx], subset);
      subset.pop();
    }
  };
  dfs(0, 0, []);
  return ans;  
};