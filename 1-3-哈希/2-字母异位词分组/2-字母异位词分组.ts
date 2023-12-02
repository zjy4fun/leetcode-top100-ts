// https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
// 包含的字母种类和数量是一致的，只是顺序不同
export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();
  // <key, value> = <sortedStr, [str, str, ...]>
  for(let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sortedStr = str.split('').sort().join('');
    if(map.has(sortedStr)) {
      map.get(sortedStr).push(str)
    } else {
      map.set(sortedStr, [str])
    }
  }
  return Array.from(map.values())
};

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
const strs2 = [""]
const strs3 = ["a"]
console.log(groupAnagrams(strs1)) // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(strs2)) // [[""]]
console.log(groupAnagrams(strs3)) // [["a"]]