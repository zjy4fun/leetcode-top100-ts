/**
 * 柱状图中的最大矩形
 * https://leetcode.cn/problems/largest-rectangle-in-histogram/description/?envType=study-plan-v2&envId=top-100-liked
 */
function largestRectangleArea(heights: number[]): number {
  let res = 0;
  const stack: number[] = []; // 递增的高度索引序列
  const newHeights = [...heights, 0];
  for (let i = 0; i < newHeights.length; i++) {
    // 一旦有减小的趋势，就要计算一下
    while (stack.length && newHeights[stack[stack.length - 1]] > newHeights[i]) {
      const index = stack.pop()!;
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      res = Math.max(res, newHeights[index] * width);
    }
    stack.push(i);
  }
  return res;  
};