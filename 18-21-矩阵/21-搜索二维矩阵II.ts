/**
 * 搜索二维矩阵II
 * https://leetcode.cn/problems/search-a-2d-matrix-ii/
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * 
 * 从右上到左下搜索
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  if(matrix.length === 0) return false;
  let col = matrix[0].length - 1, row = 0;
  while(col >= 0 && row < matrix.length) {
    if(matrix[row][col] === target) return true;
    else if(matrix[row][col] > target) col --;
    else row ++;
  }
  return false;
};