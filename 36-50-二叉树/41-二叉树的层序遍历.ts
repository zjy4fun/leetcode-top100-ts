/**
 * 二叉树的层序遍历
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/?envType=study-plan-v2&envId=top-100-liked
 * @param root 
 */
function levelOrder(root: TreeNode | null): number[][] {
    if(!root) return [];
    const result: number[][] = [];
    const queue: TreeNode[] = [];
    queue.push(root);
    while(queue.length) {
        const len = queue.length;
        const level: number[] = [];
        for(let i = 0; i < len; i++ ){
            const node = queue.shift()!;
            level.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
};