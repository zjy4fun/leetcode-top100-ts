// https://leetcode.cn/problems/two-sum/?envType=study-plan-v2&envId=top-100-liked
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  // <key, value> = <num, index>
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(map.has(target - num)) {
      return [map.get(target - num), i]
    } else {
      map.set(num, i)
    }
  }
  return [-1, -1]
};