/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    let res = 0;
    let len = 0;
    var i,j,k;
    for(i = 0; i < A.length; i++){
        len = 0;
        k = i;
        j = 0;
        while(k < A.length && j < B.length){
            if(A[k++] === B[j++]){
                len++;
                res = res > len ? res : len;
            }else len = 0;
        }
    }
    for(i = 0; i < B.length; i++){
        len = 0;
        k = i;
        j = 0;
        while(k < B.length && j < A.length){
            if(B[k++] === A[j++]){
                len++;
                res = res > len ? res : len;
            }else len = 0;
        }
    }
    return res;

};



let A = [1, 2, 3, 2, 1],
    B = [3, 2, 1, 4]

console.log(findLength(A, B));

