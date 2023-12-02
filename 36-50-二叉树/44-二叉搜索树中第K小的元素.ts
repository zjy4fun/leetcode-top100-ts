/**
 * 二叉搜索树中第K小的元素
 * @param root 
 * @param k 
 */
function kthSmallest(root: TreeNode | null, k: number): number {
    const res: number[] = [];
    helper(res, root);
    return res[k - 1];
};

function helper(res: number[], root: TreeNode | null) {
    if(!root) return;
    helper(res, root.left);
    res.push(root.val);
    helper(res, root.right);
}
/*
class Solution {
    public int kthSmallest(TreeNode root, int k) {
        List<Integer> res = new ArrayList<>();
        helper(res, root);
        return res.get(k - 1);
    }
    
    public void helper(List<Integer> res, TreeNode root){
        if(root == null){
            return;
        }
        helper(res, root.left);
        res.add(root.val);
        helper(res, root.right);
    }
}
 */