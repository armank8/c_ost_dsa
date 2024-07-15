
// string checking
function isPalin(s) {
    console.log(s);
    n = s.length;
    console.log(n);
    let j;
    // isPalin();
    for (let i = 0, j = n - 1; i < n / 2, i < j; i++, j--) {
        if (s[i] == s[j]) {
            return true;
        }
    }

    return false;


}

console.log(isPalin('abccba'));



// integer checking
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    let sx = x.toString();
    n = sx.length;
    if (n == 1) {
        return true;
    }

    let j;
    // isPalin();
    for (let i = 0, j = n - 1; i < n / 2, i < j; i++, j--) {
        if (sx[i] !== sx[j]) {
            console.log(sx[i], sx[j], i, j);
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(123123));