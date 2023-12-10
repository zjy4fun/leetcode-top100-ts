/**
 * 数据流中的中位数
 * https://leetcode.cn/problems/find-median-from-data-stream/description/?envType=study-plan-v2&envId=top-100-liked
 */
class MedianFinder {
  private nums: number[];

  constructor() {
    this.nums = [];
  }

  addNum(num: number): void {
    if (this.nums.length === 0) {
      this.nums.push(num);
    } else {
      let low = 0;
      let high = this.nums.length - 1;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (this.nums[mid] === num) {
          this.nums.splice(mid, 0, num);
          return;
        } else if (this.nums[mid] < num) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      this.nums.splice(low, 0, num);
    }
  }

  findMedian(): number {
    const length = this.nums.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
      return (this.nums[mid - 1] + this.nums[mid]) / 2;
    } else {
      return this.nums[mid];
    }
  }
}

// Example Usage:
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // Output: 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 2.0