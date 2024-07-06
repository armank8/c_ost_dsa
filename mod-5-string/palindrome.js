function palindrome(input) {
    const S = input;
    console.log(S);
    const n = S.length;
    console.log(n);
    for (let i = 0; i < n / 2; i++) {
        if (S[i] !== S[n - 1 - i]) {
            console.log("NO");
            return;
        }
    }
    console.log("YES");
}

console.log(palindrome('madam'))