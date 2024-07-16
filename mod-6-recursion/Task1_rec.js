function isP(s, i, j) {
    if (i >= j) {
        return true;
    }
    if (s[i] !== s[j]) {
        return false;
    }
    return isP(s, i + 1, j - 1);
}
function isPalin(s) {
    n = s.length;
    return isP(s, 0, n - 1);
}
// Time Complexity : O(logn)
// Space Complexity : O(n)
console.log(isPalin('madam'));
console.log(isPalin('adam'));
console.log(isPalin('tenet'));