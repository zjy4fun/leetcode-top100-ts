/**
 * 全排列
 * https://leetcode.cn/problems/permutations/description/?envType=study-plan-v2&envId=top-100-liked
 */
function permute(nums: number[]): number[][] {
  const n = nums.length;
  const ans: number[][] = [];
  const vis: boolean[] = new Array(n).fill(false);
  const dfs = (idx: number, perm: number[]) => {
    if (idx == n) {
      ans.push(perm.slice());
      return;
    }
    for (let i = 0; i < n; ++i) {
      if (!vis[i]) {
        perm.push(nums[i]);
        vis[i] = true;
        dfs(idx + 1, perm);
        vis[i] = false;
        perm.pop();
      }
    }
  };
  dfs(0, []);
  return ans;  
};