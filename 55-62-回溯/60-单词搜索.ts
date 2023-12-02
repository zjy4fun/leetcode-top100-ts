/**
 * 单词搜索
 * https://leetcode.cn/problems/word-search/description/?envType=study-plan-v2&envId=top-100-liked
 */
function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const vis: boolean[][] = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  const dfs = (x: number, y: number, idx: number): boolean => {
    if (idx == word.length) {
      return true;
    }
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < m && j >= 0 && j < n && !vis[i][j] && board[i][j] == word[idx]) {
        vis[i][j] = true;
        if (dfs(i, j, idx + 1)) {
          return true;
        }
        vis[i][j] = false;
      }
    }
    return false;
  };
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
        if (board[i][j] == word[0]) {
            vis[i][j] = true;
            if (dfs(i, j, 1)) {
                return true;
            }
            vis[i][j] = false;
        }
    }
  }
  return false;
};