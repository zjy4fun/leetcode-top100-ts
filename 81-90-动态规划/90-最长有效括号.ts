/**
 * 最长有效括号
 * https://leetcode.cn/problems/longest-valid-parentheses/description/?envType=study-plan-v2&envId=top-100-liked
 */
function longestValidParentheses(s: string): number {
  const n = s.length;
  const dp: number[] = new Array(n).fill(0);
  let maxLen = 0;

  for (let i = 1; i < n; i++) {
      if (s[i] === ')') {
          if (s[i - 1] === '(') {
              dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
          } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
              dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0);
          }
          maxLen = Math.max(maxLen, dp[i]);
      }
  }

  return maxLen;
}