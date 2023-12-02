// https://leetcode.cn/problems/3sum/?envType=study-plan-v2&envId=top-100-liked
// 三数之和
function threeSum(nums: number[]): number[][] {
  const res: number[][] = []
  nums.sort((a, b) => a - b)
  for(let i = 0; i < nums.length - 2; i++) {
    const num = nums[i]
    if(num > 0) break
    if(i > 0 && num === nums[i - 1]) continue
    let left = i + 1, right = nums.length - 1
    while(left < right) {
      let sum = num + nums[left] + nums[right]
      if(sum === 0) {
        res.push([num, nums[left], nums[right]])
        while(left < right && nums[left] === nums[left + 1]) left ++
        while(left < right && nums[right] === nums[right - 1]) right -- 
        left ++
        right -- 
      } else if(sum < 0) {
        left ++
      } else {
        right --
      }
    }
  }
  return res
};

const nums1 = [-1,0,1,2,-1,-4]
const nums2 = [0,1,1]
const nums3 = [0,0,0]
console.log(threeSum(nums1))//[[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums2))//[]
console.log(threeSum(nums3))//[[0,0,0]]