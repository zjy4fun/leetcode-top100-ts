/**
 * 矩阵置零
 * https://leetcode.cn/problems/set-matrix-zeroes/?envType=study-plan-v2&envId=top-100-liked
 * 
 */
 function setZeroes(matrix: number[][]): void {
  const m = matrix.length, n = matrix[0].length;
  const row = new Array(m).fill(false);
  const col = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) {
              row[i] = col[j] = true;
          }
      }
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (row[i] || col[j]) {
              matrix[i][j] = 0;
          }
      }
  }
 };