/**
 * 二叉树的右视图
 * https://leetcode.cn/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-100-liked
 */
function rightSideView(root: TreeNode | null): number[] {
  let res: number[] = [];
  if(!root) return res;
  let queue: TreeNode[] = [root];
  while(queue.length) {
    let len = queue.length;
    for(let i = 0; i < len; i++) {
      let node = queue.shift()!;
      if(i === len - 1) res.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }
  return res; 
};