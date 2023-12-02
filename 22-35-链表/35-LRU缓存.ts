/**
 * LRU 缓存
 * https://leetcode.cn/problems/lru-cache/description/?envType=study-plan-v2&envId=top-100-liked
 * * 最近最少使用
 * * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行 ==> 双向链表 + 哈希表
 */
class Node {
  key: number;
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(key: number = 0, value: number = 0) {
      this.key = key;
      this.value = value;
      this.prev = null;
      this.next = null;
  }
}

class LRUCache {
  capacity: number;
  dummy: Node;
  keyToNode: Map<number, Node>;

  constructor(capacity: number) {
      this.capacity = capacity;
      this.dummy = new Node(); // Sentinel node
      this.dummy.prev = this.dummy;
      this.dummy.next = this.dummy;
      this.keyToNode = new Map();
  }

  get(key: number): number {
      if (!this.keyToNode.has(key)) {
          return -1;
      }
      const node = this.keyToNode.get(key)!;
      this.remove(node);
      this.pushFront(node);
      return node.value;
  }

  put(key: number, value: number): void {
      let node = this.keyToNode.get(key);
      if (node) {
          node.value = value;
          this.remove(node);
          this.pushFront(node);
          return;
      }
      node = new Node(key, value);
      this.keyToNode.set(key, node);
      this.pushFront(node);
      if (this.keyToNode.size > this.capacity) {
          const backNode = this.dummy.prev!;
          this.keyToNode.delete(backNode.key);
          this.remove(backNode);
      }
  }

  // Remove a node
  remove(x: Node) {
      if (x.prev && x.next) {
          x.prev.next = x.next;
          x.next.prev = x.prev;
      }
  }

  // Add a node to the front of the linked list
  pushFront(x: Node) {
      x.prev = this.dummy;
      x.next = this.dummy.next;
      if (this.dummy.next) {
          this.dummy.next.prev = x;
      }
      this.dummy.next = x;
  }
}
