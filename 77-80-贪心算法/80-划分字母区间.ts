/**
 * 划分字母区间
 * https://leetcode.cn/problems/partition-labels/description/?envType=study-plan-v2&envId=top-100-liked
 */
function partitionLabels(s: string): number[] {
  const map = new Map<string, number>();
  for(let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }
  const result: number[] = [];
  let start = 0;
  let end = 0;
  for(let i = 0; i < s.length; i++) {
    end = Math.max(end, map.get(s[i])!);
    if(i === end) {
      result.push(end - start + 1);
      start = end + 1;
    }
  }
  return result;
};