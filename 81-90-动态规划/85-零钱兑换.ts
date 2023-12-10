/**
 * 零钱兑换
 * https://leetcode.cn/problems/coin-change/description/?envType=study-plan-v2&envId=top-100-liked
 */
function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0]= 0;
  for(let i = 1; i < amount + 1; i++){
      for(let j = 0; j < coins.length; j++) {
          if(coins[j] <= i) {
              dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
          }
      }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};