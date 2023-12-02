/**
 * 腐烂的橘子
 * https://leetcode.cn/problems/rotting-oranges/?envType=study-plan-v2&envId=top-100-liked 
 */
function orangesRotting(grid: number[][]): number {
  let minutes = 0
  let fresh = 0
  let queue: number[][] = []
  let w = grid.length, h = grid[0].length
  for (let i = 0; i < w; i++) {
      for (let j = 0; j < h; j++) {
          if (grid[i][j] === 1) fresh++
          if (grid[i][j] === 2) queue.push([i, j])
      }
  }
  while (queue.length!==0 && fresh) {
      let area = [[0, 1], [0, -1], [-1, 0], [1, 0]]
      let next: number[][] = []
      while (queue.length!==0) {
          // @ts-ignore
          let current = queue.pop()
          for (let [dx, dy] of area) {
              // @ts-ignore
              const x = dx + current[0], y = dy + current[1]
              if (x >= 0 && x < w && y >= 0 && y < h) {
                  if (grid[x][y] === 1) {
                      grid[x][y] = 2
                      next.push([x, y])
                      fresh--
                  }
              }
          }
      }
      minutes++
      queue = next
  }
  return fresh === 0 ? minutes : -1
};