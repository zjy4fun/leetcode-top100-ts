/**
 * 编辑距离
 * https://leetcode.cn/problems/edit-distance/description/?envType=study-plan-v2&envId=top-100-liked
 */
function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;

  // 创建一个二维数组 dp，其中 dp[i][j] 表示将 word1 的前 i 个字符转换成 word2 的前 j 个字符所需的最小操作数
  const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  // 初始化边界条件
  for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
  }

  // 动态规划填表
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (word1[i - 1] === word2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
          } else {
              dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
          }
      }
  }

  // dp[m][n] 中存储的即为将 word1 转换成 word2 所需的最小操作数
  return dp[m][n];
}