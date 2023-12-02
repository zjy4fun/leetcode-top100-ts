/**
 * 前缀树
 * https://leetcode.cn/problems/implement-trie-prefix-tree/description/?envType=study-plan-v2&envId=top-100-liked
 */
class Trie {
  children: { end?: boolean } | null;
  constructor() {
    this.children = {};
  }

  insert(word: string): void {
    let node = this.children!;
    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }
      node = node[ch];
    }
    node.end = true;
  }

  private searchPrefix(prefix: string) {
    let node = this.children!;
    for (const ch of prefix) {
      if (!node[ch]) {
        return null;
      }
      node = node[ch];
    }
    return node;
  }

  search(word: string): boolean {
    const node = this.searchPrefix(word);
    return node != null && node.end != undefined;
  }

  startsWith(prefix: string): boolean {
    return this.searchPrefix(prefix) != null;
  }
}

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/