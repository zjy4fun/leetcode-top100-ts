/**
 * 搜索二维矩阵
 * https://leetcode.cn/problems/search-a-2d-matrix/description/?envType=study-plan-v2&envId=top-100-liked
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    let row = 0, col = matrix[0].length - 1;
    while(row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        if (matrix[row][col] < target) row++;
        else col--;
    }
    return false;
};