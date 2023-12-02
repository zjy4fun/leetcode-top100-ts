/**
 * 缺失的第一个正数
 * https://leetcode.cn/problems/first-missing-positive/description/?envType=study-plan-v2&envId=top-100-liked
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 原地哈希，把数组看做哈希表
 */
function firstMissingPositive(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    for(let i = 0; i < n; i++) {
      // 如果遍历的数字在范围内并且不在正确的位置上，就交换
      while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
        swap(nums, nums[i] - 1, i)
      }
    }
    // 遍历数组，找到第一个不正确的位置，返回
    for(let i = 0; i < n; i++) {
      if(nums[i] != i + 1) {
        return i + 1;
      }
    }
    return n + 1;
};
function swap(nums: number[], i: number, j: number) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}