/**
 * 乘积最大子数组
 * https://leetcode.cn/problems/maximum-product-subarray/?envType=study-plan-v2&envId=top-100-liked
 */
function maxProduct(nums: number[]): number {
  let imax = 1, imin = 1, maxRes = -2147483648;
  for(let n of nums) {
    if(n < 0) {
      let temp = imax;
      imax = imin;
      imin = temp;
    }
    imax = Math.max(imax * n, n);
    imin = Math.min(imin * n, n);
    maxRes = Math.max(maxRes, imax);
  }
  return maxRes;
};