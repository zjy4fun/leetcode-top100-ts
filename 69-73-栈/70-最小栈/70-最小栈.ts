/**
 * 最小栈
 * https://leetcode.cn/problems/min-stack/description/?envType=study-plan-v2&envId=top-100-liked
 */
class MinStack {
  stack: number[] = [];
  minStack: number[] = [];
  constructor() {

  }

  push(val: number): void {
    this.stack.push(val);
    if(this.minStack.length === 0) {
      this.minStack.push(val)
    } else if(val < this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val)
    } else {
      this.minStack.push(this.minStack[this.minStack.length - 1])
    }  
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/