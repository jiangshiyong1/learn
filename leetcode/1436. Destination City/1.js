/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let n = paths.length
    let m = paths[0].length
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            arr1[i] = paths[i][0]
            arr2[i] = paths[i][1]
        }

    }
    let arr = arr2.filter(item => !arr1.includes(item))
    return arr[0]
};

let paths = [["B", "C"], ["D", "B"], ["C", "A"]]
destCity(paths)
