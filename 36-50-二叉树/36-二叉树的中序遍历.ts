/**
 * 二叉树的中序遍历
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/?envType=study-plan-v2&envId=top-100-liked 
 */
function inorderTraversal(root: TreeNode | null): number[] {
   if(root === null) return [];
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let cur = root;
    while(cur || stack.length) {
        while(cur) {
            stack.push(cur);
            cur = cur.left!;
        }
        const node = stack.pop()!;
        result.push(node.val);
        cur = node.right;
    }
    return result;
};