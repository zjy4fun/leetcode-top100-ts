// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// https://leetcode.cn/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-100-liked
function trap(height: number[]): number {
    if(height.length < 3) return 0;
    let left = 0, right = height.length - 1;
    let leftMax = height[left], rightMax = height[right];
    let res = 0;
    while(left < right) {
        if(leftMax < rightMax) {
            left++;
            if(leftMax > height[left]) {
                res += leftMax - height[left];
            } else {
                leftMax = height[left];
            }
        } else {
            right--;
            if(rightMax > height[right]) {
                res += rightMax - height[right];
            } else {
                rightMax = height[right];
            }
        }
    }
    return res;
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height)); // 6
