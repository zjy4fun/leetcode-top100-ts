/**
 * 买卖股票的最佳时机
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-100-liked
 */
function maxProfit(prices: number[]): number {
  let max = 0;
  let low = prices[0];
  for(let i = 0; i < prices.length; i++ ) {
      max = Math.max(max, prices[i] - low);
      low = Math.min(low, prices[i]);
  }
  return max;
};