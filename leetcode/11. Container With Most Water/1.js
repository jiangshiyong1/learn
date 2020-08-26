/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0, r = height.length, ans = 0
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (l - r)
        ans = Math.max(area, ans)
        if (height[l] <= height[r]) {
            l++
        } else {
            r--
        }
    }
    return ans
};