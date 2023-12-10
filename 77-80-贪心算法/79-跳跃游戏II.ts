/**
 * 跳跃游戏II
 * https://leetcode.cn/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-100-liked
 */
function jump(nums: number[]): number {
  let count = 0;
  let maxFar = 0;
  let end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxFar = Math.max(maxFar, i + nums[i]);
    if (i === end) {
      end = maxFar;
      count++;
    }
  }
  return count; 
};