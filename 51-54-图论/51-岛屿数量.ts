/**
 * 岛屿数量
 * https://leetcode.cn/problems/number-of-islands/description/?envType=study-plan-v2&envId=top-100-liked
 * @param grid 
 * @returns 
 */
function numIslands(grid: string[][]): number {
  const row = grid.length, col = grid[0].length;
  let count = 0;
  for(let i = 0; i < row; i++) {
      for(let j = 0; j < col; j++) {
          if(grid[i][j] === '1') {
              dfs(grid, i, j);
              count ++
          }
      }
  }
  return count;
};

function dfs(grid: string[][], i: number, j: number) {
  if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      return;
  }
  if(grid[i][j] === '1') {
      grid[i][j] = '0';
      dfs(grid, i + 1, j);
      dfs(grid, i - 1, j);
      dfs(grid, i, j + 1);
      dfs(grid, i, j - 1);
  }
}