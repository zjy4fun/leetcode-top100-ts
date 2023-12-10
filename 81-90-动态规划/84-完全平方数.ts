/**
 * 完全平方数
 * https://leetcode.cn/problems/perfect-squares/description/?envType=study-plan-v2&envId=top-100-liked
 */
function numSquares(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  for(let i = 1; i <= n; i++){
      let minn = Number.MAX_SAFE_INTEGER;
      for(let j = 1; j * j <= i; j++){
          minn = Math.min(minn, dp[i - j * j]);
      }
      dp[i] = minn + 1;
  }
  return dp[n];
};