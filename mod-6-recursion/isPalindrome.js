
// string checking
function isP(s, i, j) {
    console.log(s, i, j);
    if (i >= j) {
        return true;
    }

    if (s[i] !== s[j]) {
        console.log(s[i], s[j], i, j);
        return false;
    }
    return isP(s, i + 1, j - 1);
}

function isPalin(s) {
    n = s.length;
    return isP(s, 0, n - 1);
}

console.log(isPalin('madam'));



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