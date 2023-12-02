/**
 * 括号生成
 * https://leetcode.cn/problems/generate-parentheses/?envType=study-plan-v2&envId=top-100-liked
 */
function generateParenthesis(n: number): string[] {
  const ans: string[] = [];
  const dfs = (l: number, r: number, str: string) => {
    if (l == 0 && r == 0) {
      ans.push(str);
      return;
    }
    if (l > 0) {
      dfs(l - 1, r, str + '(');
    }
    if (r > l) {
      dfs(l, r - 1, str + ')');
    }
  };
  dfs(n, n, '');
  return ans;  
};