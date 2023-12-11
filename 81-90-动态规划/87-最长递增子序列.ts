/**
 * 最长递增子序列
 * https://leetcode.cn/problems/longest-increasing-subsequence/?envType=study-plan-v2&envId=top-100-liked
 */
function lengthOfLIS(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(0);
  dp[0] = 1;
  for(let i = 1; i < nums.length; i++) {
    let temp = 1;
    for(let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) {
        temp = Math.max(temp, dp[j] + 1);
      }
    }
    dp[i] = temp;
  }
  let res = 0;
  for(let a of dp) {
    res = Math.max(res, a);
  }
  return res;
};