/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const hash = {}
    let ans = []
    for (const num of nums1) {
        if (hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1
        }
    }
    for (const num of nums2) {
        if (hash[num] && hash[num] > 0) {
            ans.push(num)
            hash[num]--
        }
    }
    return ans
};

let nums1 = [1, 2, 2, 1]
nums2 = [2, 2]

intersect(nums1, nums2)