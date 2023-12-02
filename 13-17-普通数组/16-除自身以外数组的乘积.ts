/**
 * 除自身以外数组的乘积
 * https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-100-liked
 * 先计算左边的乘积，再计算右边的乘积
 */
function productExceptSelf(nums: number[]): number[] {
  let p = 1, q = 1;
  const res: number[] = Array.from({length: nums.length}, () => 1);
  for (let i = 0; i < nums.length; i++) {
    res[i] *= p;
    p *= nums[i];
    res[nums.length - 1 - i] *= q;
    q *= nums[nums.length - 1 - i];
  }
  return res;  
};