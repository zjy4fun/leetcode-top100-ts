// https://leetcode.cn/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-100-liked
// 盛最多水的容器
function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1;
  let max = 0;
  while(left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area)
    if(height[left] <= height[right]) {
      left++
    } else {
      right--
    }
  }
  return max;
};

const height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height)) // 49