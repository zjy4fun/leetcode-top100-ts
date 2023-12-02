/**
 * 分割回文串
 * https://leetcode.cn/problems/palindrome-partitioning/description/?envType=study-plan-v2&envId=top-100-liked
 */
function partition(s: string): string[][] {
  const ans: string[][] = [];
  const dfs = (idx: number, subset: string[]) => {
    if (idx == s.length) {
      ans.push(subset.slice());
      return;
    }
    for (let i = idx; i < s.length; ++i) {
      if (isPalindrome(s, idx, i)) {
        subset.push(s.substring(idx, i + 1));
        dfs(i + 1, subset);
        subset.pop();
      }
    }
  };
  dfs(0, []);
  return ans;    
};
function isPalindrome(s: string, l: number, r: number): boolean {
  while (l < r) {
    if (s[l++] != s[r--]) {
      return false;
    }
  }
  return true;
}