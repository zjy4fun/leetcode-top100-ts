/**
 * 在排序数组中查找元素的第一个和最后一个位置
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/?envType=study-plan-v2&envId=top-100-liked
 */
function searchRange(nums: number[], target: number): number[] {
   let left = 0, right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            let i = mid, j = mid;
            while(nums[i] === target) i--;
            while(nums[j] === target) j++;
            return [i + 1, j - 1];
        }
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return [-1, -1]; 
};