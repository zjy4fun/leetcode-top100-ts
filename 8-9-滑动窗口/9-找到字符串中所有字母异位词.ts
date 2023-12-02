/**
 * 找到字符串中所有字母异位词
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/?envType=study-plan-v2&envId=top-100-liked
 * 
 * 滑动窗口中，两个字符串含有字符和数量的差异数量是多少
 * differ 来记录当前窗口与字符串 p 中数量不同的字母的个数，并在滑动窗口的过程中维护它。
 * @param s 
 * @param p 
 */
function findAnagrams(s: string, p: string): number[] {
  const sLen = s.length, pLen = p.length

  if(sLen < pLen) return []

  const ans: number[] = []
  const count = Array(26).fill(0)
  for(let i = 0; i < pLen; i++) {
    ++count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]
    --count[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]
  }

  let differ = 0
  for(let j = 0; j < 26; j++) {
    if(count[j] !== 0) ++differ
  }

  if(differ === 0) ans.push(0)

  for(let i = 0; i < sLen - pLen; i++) {
    if(count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
      --differ
    } else if(count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
      ++differ
    }
    --count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]

    if(count[s[i+pLen].charCodeAt(0) - 'a'.charCodeAt(0)] === -1) {
      --differ
    } else if(count[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
      ++differ
    }
    ++count[s[i + pLen].charCodeAt(0) - 'a'.charCodeAt(0)]

    if(differ === 0) {
      ans.push(i + 1)
    }
  }

  return ans
}
