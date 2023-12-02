// https://leetcode.cn/problems/move-zeroes/description/?envType=study-plan-v2&envId=top-100-liked
// 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let left = 0, right = nums.length
    while(left < right) {
      if(nums[left] === 0) {
        nums.splice(left, 1)
        nums.push(0)
        right--
      } else {
        left++
      }
    }
 };

const nums1 = [0,1,0,3,12]
const nums2 = [0]

moveZeroes(nums1)
moveZeroes(nums2)
console.log(nums1)
console.log(nums2)