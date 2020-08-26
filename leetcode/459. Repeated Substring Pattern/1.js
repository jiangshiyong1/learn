var repeatedSubstringPattern = function(s) {
    let len = s.length;
    let i = 1;
    while(i <= len / 2) {
        if (len % i == 0 && s.slice(0, i).repeat(len/i) == s) {
            return true
        }
        i++;
    }
    return false
};


console.log(repeatedSubstringPattern("abcabcabc"));