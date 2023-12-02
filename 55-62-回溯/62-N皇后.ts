/**
 * N皇后
 * https://leetcode.cn/problems/n-queens/description/?envType=study-plan-v2&envId=top-100-liked
 */
function solveNQueens(n: number): string[][] {
  const ans: string[][] = [];
  const board: string[][] = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));
  const cols: boolean[] = new Array(n).fill(false);
  const diag1: boolean[] = new Array(2 * n - 1).fill(false);
  const diag2: boolean[] = new Array(2 * n - 1).fill(false);
  const dfs = (row: number) => {
    if (row == n) {
      const copy = board.map((row) => row.join(''));
      ans.push(copy);
      return;
    }
    for (let col = 0; col < n; ++col) {
      if (!cols[col] && !diag1[row + col] && !diag2[row - col + n - 1]) {
        board[row][col] = 'Q';
        cols[col] = diag1[row + col] = diag2[row - col + n - 1] = true;
        dfs(row + 1);
        cols[col] = diag1[row + col] = diag2[row - col + n - 1] = false;
        board[row][col] = '.';
      }
    }
  };
  dfs(0);
  return ans;  
};