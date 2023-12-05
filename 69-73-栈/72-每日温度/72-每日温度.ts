/**
 * 每日温度
 * https://leetcode.cn/problems/daily-temperatures/?envType=study-plan-v2&envId=top-100-liked
 */
function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = []; // 递减的温度索引序列
  const res: number[] = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const index = stack.pop()!;
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;  
};