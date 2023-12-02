/**
 * 螺旋矩阵
 * https://leetcode.cn/problems/spiral-matrix/?envType=study-plan-v2&envId=top-100-liked
 * @param matrix 
 */
function spiralOrder(matrix: number[][]): number[] {
  // boundary
  let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1;
  const res: number[] = [];
  while(left <= right && top <= bottom) {
   // left => right
    for(let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top ++;
    if(top > bottom) break;
    // top => bottom
    for(let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right --;
    if(left > right) break;
    // right => left
    for(let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom --;
    // bottom => top
    for(let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left ++;
  }
  return res;
};

const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
const res1 = spiralOrder(matrix1);
console.log('res1 = ', res1)

const matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
const res2 = spiralOrder(matrix2);
console.log('res2 = ', res2)