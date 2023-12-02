/**
 * 二叉树的最近公共祖先
 * @param root 
 * @param p 
 * @param q 
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(root === null || root.val === p.val || root.val === q.val) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if(left === null) return right;
  if(right === null) return left;
  return root;
};