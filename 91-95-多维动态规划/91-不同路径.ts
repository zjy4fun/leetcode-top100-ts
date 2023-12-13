/**
 * 不同路径
 * https://leetcode.cn/problems/unique-paths/?envType=study-plan-v2&envId=top-100-liked
 */
function uniquePaths(m: number, n: number): number {
  const dp: number[] = new Array(n).fill(0);
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(i === 0 || j === 0) {
        dp[j] = 1;
      } else {
        dp[j] = dp[j - 1] + dp[j];
      }
    }
  }

  return dp[n - 1];
};