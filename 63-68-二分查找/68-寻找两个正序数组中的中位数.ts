/**
 * 寻找两个正序数组中的中位数
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/description/?envType=study-plan-v2&envId=top-100-liked
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const n1 = nums1.length;
  const n2 = nums2.length;
  if(n1 > n2) {
    return findMedianSortedArrays(nums2, nums1)
  }
  const len = (n1 + n2 + 1) >> 1;
  let left = 0, right = n1;
  while(left < right) {
    const m1 = (left + right) >> 1;
    const m2 = len - m1;
    if(nums1[m1] < nums2[m2 - 1]) {
      left = m1 + 1;
    } else {
      right = m1;
    }
  }
  const m1 = left;
  const m2 = len - left;
  const res1 = Math.max(m1 <= 0 ? Number.MIN_SAFE_INTEGER : nums1[m1 - 1], m2 <= 0 ? Number.MIN_SAFE_INTEGER : nums2[m2 - 1]);
  if((n1 + n2) % 2 === 1) {
    return res1;
  }
  const res2 = Math.min(m1 >= n1 ? Number.MAX_SAFE_INTEGER : nums1[m1], m2 >= n2 ? Number.MAX_SAFE_INTEGER : nums2[m2]);
  return (res1 + res2) / 2;
};