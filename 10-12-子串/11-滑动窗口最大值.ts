/**
 * 滑动窗口最大值
 * https://leetcode.cn/problems/sliding-window-maximum/?envType=study-plan-v2&envId=top-100-liked
 * 
 * keyword 单调队列
 * 使用队列记录当前窗口中最大值的下标，严格单调递减
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
    const n = nums.length;
    const q: number[] = []; // 队首下标对应的值最大，单调递减
    for(let i = 0; i < k; i++) {
      while(q.length && nums[i] >= nums[q[q.length - 1]]) {
        q.pop()
      }
      q.push(i)
    }

    const ans = [nums[q[0]]]
    for(let i = k; i < n; i++) {
      while(q.length && nums[i] >= nums[q[q.length - 1]]) {
        q.pop()
      }
      q.push(i)

      while(q[0] <= i - k) {
        q.shift()
      }
      ans.push(nums[q[0]])
    }
    return ans;
};