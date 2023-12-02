/**
 * 最大子数组和
 * https://leetcode.cn/problems/maximum-subarray/description/?envType=study-plan-v2&envId=top-100-liked
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 * 
 * 正数越多越好，负数越多越坏
 */
function maxSubArray(nums: number[]): number {
  let sum = nums[0]
  let res = nums[0]
  for(let i = 1; i < nums.length; i++) {
    // 及时止损
    sum = sum < 0 ? nums[i] : sum + nums[i]
    res = Math.max(sum, res)
  }
  return res
};

const nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums)) // 6

const nums2 = [1]
console.log(maxSubArray(nums2)) // 1

const nums3 = [5,4,-1,7,8]
console.log(maxSubArray(nums3)) // 23