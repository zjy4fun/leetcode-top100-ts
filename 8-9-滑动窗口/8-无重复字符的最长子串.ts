/**
 * 给定一个字符串s，请你找出其中不含有重复字符的最长子串的长度。
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-100-liked
 * @param s 
 */
function lengthOfLongestSubstring(s: string): number {
  const charIndexMap = new Map()
  let maxLen = 0
  let left = 0

  for(let right = 0; right < s.length; right ++) {
      if(charIndexMap.has(s[right]) && charIndexMap.get(s[right]) >= left) {
          left = charIndexMap.get(s[right]) + 1
      }
      charIndexMap.set(s[right], right)
      maxLen = Math.max(maxLen, right - left + 1)
  }
  return maxLen
}

console.log(lengthOfLongestSubstring('')) // 0
console.log(lengthOfLongestSubstring(' ')) // 1
console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3