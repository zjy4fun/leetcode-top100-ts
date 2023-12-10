/**
 * 杨辉三角
 * https://leetcode.cn/problems/pascals-triangle/?envType=study-plan-v2&envId=top-100-liked
 */
function generate(numRows: number): number[][] {
  const res: number[][] = [];
  res[0] = [1];
  for(let x = 1; x < numRows; x ++ ){
      const tmp: number[] = new Array(x + 1);
      for(let y = 0; y <= x; y++ ) {
          const a = y > 0 ? res[x-1][y-1] : 0;
          const b = y < x ? res[x-1][y] : 0;
          tmp[y] = a + b;
      }
      res[x] = tmp;
  }
  return res;
};