/**
 * 单词拆分
 * https://leetcode.cn/problems/word-break/description/?envType=study-plan-v2&envId=top-100-liked
 */
function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const dp: boolean[] = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (const word of wordDict) {
      if (word.length <= i && dp[i - word.length]) {
        if (s.substring(i - word.length, i) === word) {
          dp[i] = true;
          break;
        }
      }
    }
  }

  return dp[n];
}