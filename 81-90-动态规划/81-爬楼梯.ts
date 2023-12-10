/**
 * 爬楼梯
 * https://leetcode.cn/problems/climbing-stairs/description/?envType=study-plan-v2&envId=top-100-liked
 */
function climbStairs(n: number): number {
  const dp = new Array(n + 1).fill(1);
  for(let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};