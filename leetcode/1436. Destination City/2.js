/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let n = paths.length
    let hashMap = new Map()
    for (let i = 0; i < n; i++) {
        hashMap.set(paths[i][0], paths[i][1])

    }
    for (const item of hashMap) {
        if(!hashMap.get(item[1])) {
            return item[1]
        }
    }
};

let paths = [["B", "C"], ["D", "B"], ["C", "A"]]
console.log(destCity(paths))
