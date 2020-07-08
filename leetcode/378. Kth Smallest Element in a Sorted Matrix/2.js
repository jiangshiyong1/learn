const getRankInMatrix = (matrix, midVal) => {
    const n = matrix.length;
    let rank = 0;
    let row = 0;                        // 第一行
    let col = n - 1;                    // 最后一列
    while (row < n && col >= 0) {
      if (midVal >= matrix[row][col]) { // 干掉了当前行的老大
        rank += col + 1;                // 干掉了j个数，排名上涨j+1
        row++;                          // 比较下一行
      } else {                          // 干不过当前行的老大
        col--;                          // 留在当前行继续比较
      }
    }
    return rank;
  };
  
  const kthSmallest = (matrix, k) => {
    const n = matrix.length;
    let low = matrix[0][0];
    let high = matrix[n - 1][n - 1];
  
    while (low <= high) {
      const midVal = low + ((high - low) >>> 1);    // 获取中间值
      const rank = getRankInMatrix(matrix, midVal); // 矩阵中小于等于它的个数
      if (rank < k) {
        low = midVal + 1;
      } else {
        high = midVal-1;
      }
    }
    return low;
  };

  let matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
],
    k = 8


console.log(kthSmallest(matrix, k))
  
