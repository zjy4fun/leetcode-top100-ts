/**
 * 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/?envType=study-plan-v2&envId=top-100-liked
 */
function isValid(s: string): boolean {
  const stack: string[] = [];
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  for(let i = 0; i < s.length; i++) {
    const c = s[i];
    if(map.has(c)) {
      if(stack[stack.length - 1] !== map.get(c)) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0;
};