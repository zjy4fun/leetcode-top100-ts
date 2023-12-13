/**
 * 多数元素
 * https://leetcode.cn/problems/majority-element/?envType=study-plan-v2&envId=top-100-liked
 */
function majorityElement(nums: number[]): number {
  let count = 0, res = 0;
  for(let n of nums) {
    if(count === 0) {
      res = n;
    }
    count += res === n ? 1 : -1;
  }
  return res;
};