/**
 * 和为 K 的 子数组
 * https://leetcode.cn/problems/subarray-sum-equals-k/?envType=study-plan-v2&envId=top-100-liked
 * 
 * keyword 前缀和
 * 
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数
 * 子数组是数组中元素的连续非空序列
 */
function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let sum = 0;
  const map = new Map();// <prefixSum, count>
  map.set(0, 1);
  for(let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if(map.has(sum - k)) {
          count += map.get(sum - k);
      }
      map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};


const nums = [1,1,1], k = 2
const nums2 = [1,2,3], k2 = 3

console.log(subarraySum(nums, k)) // 2
console.log(subarraySum(nums2, k2)) // 2