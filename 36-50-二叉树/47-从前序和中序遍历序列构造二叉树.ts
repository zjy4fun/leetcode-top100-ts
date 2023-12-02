/**
 * 从前序和中序遍历序列构造二叉树
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/?envType=study-plan-v2&envId=top-100-liked
 * @param preorder 
 * @param inorder 
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if(preorder.length <= 0) return null;
  let preL = 0, preR = preorder.length - 1;
  let inL = 0, inR = inorder.length - 1;
  return helper(preorder, preL, preR, inorder, inL, inR);
};

function helper(preorder: number[], preL: number, preR: number, inorder: number[], inL: number, inR: number): TreeNode | null {
  if(preL > preR || inL > inR || preR > preorder.length || inR > inorder.length) return null;
  let rootIndex = 0;
  let root = new TreeNode(preorder[preL]);
  for(let i = inL; i <= inR; i++) {
    if(inorder[i] === root.val) {
      rootIndex = i;
      break;
    }
  }
  root.left = helper(preorder, preL + 1, preL + (rootIndex - inL), inorder, inL, rootIndex - 1);
  root.right = helper(preorder, preL + (rootIndex - inL) + 1, preR, inorder, rootIndex + 1, inR);
  return root;
}
/*

class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if(preorder== null || preorder.length <= 0){
            return null;
        }

        int preL = 0, preR = preorder.length - 1;
        int inL = 0, inR = inorder.length - 1;
        return helper(preorder, preL, preR, inorder, inL, inR);
    }

    public TreeNode helper(int[] preorder, int preL, int preR, int[] inorder, int inL, int inR){
        if(preL > preR || inL > inR || preR > preorder.length || inR > inorder.length){
            return null;
        }
        int rootIndex = 0;
        TreeNode root = new TreeNode(preorder[preL]);
        for(int i = inL; i <= inR; i++){
            if(inorder[i] == root.val){
                rootIndex = i;
                break;
            }
        }

        root.left = helper(preorder, preL + 1, preL + (rootIndex - inL), inorder, inL, rootIndex - 1);
        root.right = helper(preorder, preL + (rootIndex - inL) + 1, preR, inorder, rootIndex + 1, inR);

        return root;
    }
}
*/
