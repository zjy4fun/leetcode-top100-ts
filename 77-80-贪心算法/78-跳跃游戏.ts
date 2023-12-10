/**
 * 跳跃游戏
 * https://leetcode.cn/problems/jump-game/description/?envType=study-plan-v2&envId=top-100-liked
 */
function canJump(nums: number[]): boolean {
  let k = 0;
  for(let i = 0; i < nums.length; i++ ) {
      if(i > k) return false;
      k = Math.max(k, i + nums[i]);
  }
  return true;  
};