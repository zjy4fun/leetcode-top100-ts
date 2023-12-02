/**
 * 旋转图像
 * https://leetcode.cn/problems/rotate-image/description/?envType=study-plan-v2&envId=top-100-liked
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 旋转=转置+反转
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  // 转置
  for(let i = 0; i < n; i++ ) {
    for(let j = i + 1; j < n ; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
  // 反转
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n / 2; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = tmp;
    }
  }
};

const matrix = [[1,2,3], [4,5,6], [7,8,9]]
rotate(matrix);