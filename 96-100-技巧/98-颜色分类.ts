/**
 * 颜色分类
 * https://leetcode.cn/problems/sort-colors/?envType=study-plan-v2&envId=top-100-liked
 */
function sortColors(nums: number[]): void {
  let p0 = 0, p2 = nums.length - 1, cur = 0;
  while(cur <= p2) {
    if(nums[cur] === 0) {
      [nums[p0], nums[cur]] = [nums[cur], nums[p0]];
      p0++;
      cur++;
    } else if(nums[cur] === 2) {
      [nums[p2], nums[cur]] = [nums[cur], nums[p2]];
      p2--;
    } else {
      cur++;
    }
  }
};