/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked
 */

export function longestConsecutive(nums: number[]): number {
  const map = new Map();
  // <key, value> = <num, length>
  let max = 0;
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(!map.has(num)) {
      const left = map.get(num - 1) || 0;
      const right = map.get(num + 1) || 0;
      const length = left + right + 1;
      map.set(num, length);
      map.set(num - left, length);
      map.set(num + right, length);
      max = Math.max(max, length);
    }
  }
  return max;
};

const nums1 = [100,4,200,1,3,2]
const nums2 = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums1)) // 4
console.log(longestConsecutive(nums2)) // 9