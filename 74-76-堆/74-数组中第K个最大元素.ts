/**
 * 数组中第K个最大元素
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/?envType=study-plan-v2&envId=top-100-liked
 */

import { MinHeap } from "./MinHeap";

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap();

  // Build a min-heap with the first k elements
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  // Update the heap by pushing the remaining elements and popping the smallest element
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()!) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  // The kth largest element is at the top of the min-heap
  return minHeap.peek()!;
}

// Example usage
const nums = [3, 2, 1, 5, 4];
const k = 2;
const result = findKthLargest(nums, k);
console.log(result); // Output: 4
