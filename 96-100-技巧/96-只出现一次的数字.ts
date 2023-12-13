/**
 * 只出现一次的数字
 * https://leetcode.cn/problems/single-number/?envType=study-plan-v2&envId=top-100-liked
 */
function singleNumber(nums: number[]): number {
  let res = 0;
  for(let n of nums) {
    res ^= n;
  }
  return res;
};