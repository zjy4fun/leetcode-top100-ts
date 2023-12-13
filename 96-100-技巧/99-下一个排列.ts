/**
 * 下一个排列
 * https://leetcode.cn/problems/next-permutation/?envType=study-plan-v2&envId=top-100-liked
 */
function nextPermutation(nums: number[]): void {
  const n = nums.length;

  // 从右往左找到第一个非递增的数字
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
  }

  // 如果找到了非递增的数字，再从右往左找到第一个比该数字大的数字
  if (i >= 0) {
      let j = n - 1;
      while (j >= 0 && nums[j] <= nums[i]) {
          j--;
      }

      // 交换这两个数字
      [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 反转 i 后面的部分
  reverse(nums, i + 1, n - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
  }
}