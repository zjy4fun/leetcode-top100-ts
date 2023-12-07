/**
 * 数组中第K个最大元素
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/?envType=study-plan-v2&envId=top-100-liked
 */
class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private heapifyUp(): void {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapifyDown(): void {
    let currentIndex = 0;
    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let minIndex = currentIndex;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
        minIndex = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
        minIndex = rightChildIndex;
      }

      if (minIndex !== currentIndex) {
        this.swap(currentIndex, minIndex);
        currentIndex = minIndex;
      } else {
        break;
      }
    }
  }

  push(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop(): number | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return top;
  }

  peek(): number | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }
}

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
