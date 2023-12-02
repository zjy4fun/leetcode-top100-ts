/**
 * 搜索旋转排序数组
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/?envType=study-plan-v2&envId=top-100-liked 
 */
function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
      const mid = Math.floor((left + right) / 2);
      if(target === nums[mid]) return mid;
      if(nums[mid] >= nums[left]) {
        if(target > nums[mid] || target < nums[left]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else {
        if(target < nums[mid] || target > nums[right]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return -1;
};