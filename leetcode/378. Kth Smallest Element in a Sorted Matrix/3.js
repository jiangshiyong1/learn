const kthSmallest = (matrix, k) => {
  let row = matrix.length
  let col = matrix[0].length
  let left = matrix[0][0]
  let right = matrix[row - 1][col - 1]
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    let count = findNotBiggerThanMid(matrix, mid, row, col)
    if (count < k) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return right
};


function findNotBiggerThanMid(martix, mid, row, col) {
  let i = row - 1
  let j = 0
  let count = 0
  while (i >= 0 && j < col) {
    if (martix[i][j] <= mid) {
      count += i + 1
      j++
    } else {
      i--
    }
  }
  return count
}

let matrix = [
  [1, 3, 5],
  [6, 7, 12], 
  [11, 14, 14]],
  k = 2
//   let matrix = [
//     [1, 5, 9],
//     [10, 11, 13],
//     [12, 13, 15]
// ],
//     k = 8


console.log(kthSmallest(matrix, k))

