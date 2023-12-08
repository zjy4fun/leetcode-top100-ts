/**
 * 前 K 个高频元素
 * https://leetcode.cn/problems/top-k-frequent-elements/description/?envType=study-plan-v2&envId=top-100-liked
 */
import { MinHeap } from "./MinHeap";

function topKFrequent(nums: number[], k: number): number[] {
  const cnt = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1);
    }
  const mini = new MinHeap();
  cnt.forEach((value, key) => {
    mini.push(value);
    if (mini.size() > k) {
      mini.pop();
    }
  });
  const result: number[] = [];
  cnt.forEach((value, key) => {
    if (value >= mini.peek()!) {
      result.push(key);
    }
  });
  return result;
};