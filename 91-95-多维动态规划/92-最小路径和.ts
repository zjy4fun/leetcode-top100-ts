/**
 * 最小路径和
 * https://leetcode.cn/problems/minimum-path-sum/description/?envType=study-plan-v2&envId=top-100-liked
 */
function minPathSum(grid: number[][]): number {
  if(grid == null || grid.length <= 0){
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;

  const dp: number[] = new Array(n + 1).fill(0);
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      if(i === 0){
        dp[j + 1] = dp[j] + grid[i][j];
      }
      else if(j === 0){
        dp[j + 1] += grid[i][j];
      }
      else{
        dp[j + 1] = Math.min(dp[j + 1], dp[j]) + grid[i][j];
      }
    }
  }

  return dp[n];
};