
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