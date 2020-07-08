function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const sortedArrayToBST = (nums) => {
    const buildBST = function (nums, start, end) {
        if (left > right) return null
        const mid = (start + end) >> 1
        const root = new TreeNode(nums[mid])
        root.left = buildBST(nums, start, mid - 1)
        root.right = buildBST(nums, mid + 1, end)
        return root
    }

    buildBST(nums, 0, nums.length)
};


let nums = [-10, -3, 0, 5, 9]

console.log(sortedArrayToBST(nums)) 