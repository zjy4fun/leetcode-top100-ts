/**
 * 搜索插入位置
 * https://leetcode.cn/problems/search-insert-position/description/?envType=study-plan-v2&envId=top-100-liked
 */
function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    if (nums[left] < target) return left + 1;
    return left;
};