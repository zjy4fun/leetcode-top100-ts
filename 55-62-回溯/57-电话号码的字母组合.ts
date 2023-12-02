/**
 * 电话号码的字母组合
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=top-100-liked
 */
function letterCombinations(digits: string): string[] {
  if (!digits.length) {
    return [];
  }
  const ans: string[] = [];
  const map: string[] = [
    'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'
  ];
  const dfs = (idx: number, str: string) => {
    if (idx == digits.length) {
      ans.push(str);
      return;
    }
    const letters = map[+digits[idx] - 2];
    for (const ch of letters) {
      dfs(idx + 1, str + ch);
    }
  };
  dfs(0, '');
  return ans; 
};