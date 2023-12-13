/**
 * 寻找重复数
 * https://leetcode.cn/problems/find-the-duplicate-number/?envType=study-plan-v2&envId=top-100-liked
 */
function findDuplicate(nums: number[]): number {
  let slow = 0, fast = 0;
  while(true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if(slow === fast) {
      break;
    }
  }
  slow = 0;
  while(slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};