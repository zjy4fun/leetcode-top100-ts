/**
 * 打家劫舍
 * https://leetcode.cn/problems/house-robber/description/?envType=study-plan-v2&envId=top-100-liked
 */
function rob(nums: number[]): number {
  const dp = new Array(nums.length + 1).fill(0);
  dp[1] = nums[0];
  for(let i = 2; i <= nums.length; i++){
      dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i - 1]);
  }
  return dp[nums.length];
};
