/**
 * 寻找旋转排序数组中的最小值
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/description/?envType=study-plan-v2&envId=top-100-liked
 */
function findMin(nums: number[]): number {
  if(nums.length === 1) return nums[0];
  let left = 0, right = nums.length - 1;
  if(nums[right] > nums[0]) return nums[0];
  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    if(nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if(nums[mid - 1] > nums[mid]) return nums[mid];
    if(nums[mid] > nums[left]) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};