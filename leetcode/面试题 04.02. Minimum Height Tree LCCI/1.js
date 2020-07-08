/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const buildBST = function (nums, start, end) {
        if(start > end) return
        const mid = (start + end) >> 1
        const root = new TreeNode(nums[mid])
        root.left = buildBST(nums, start, mid - 1)
        root.right = buildBST(nums, mid + 1, end)
        return root
    }

    return buildBST(nums, 0, nums.length - 1)
};