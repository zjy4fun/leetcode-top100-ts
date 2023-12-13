/**
 * 分割等和子集
 * https://leetcode.cn/problems/partition-equal-subset-sum/?envType=study-plan-v2&envId=top-100-liked
 */
function canPartition(nums: number[]): boolean {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  // 如果总和是奇数，不可能分割成两个相等的子集
  if (totalSum % 2 !== 0) {
      return false;
  }

  const targetSum = totalSum / 2;
  const dp: boolean[] = new Array(targetSum + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
      for (let j = targetSum; j >= num; j--) {
          dp[j] = dp[j] || dp[j - num];
      }
  }

  return dp[targetSum];
}