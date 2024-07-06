function funnyString(S) {
    // const S = input;
    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
            if (S[i] < 'a' || S[i] > 'z') {
                console.log("No");
                return;
            }
        } else {
            if (S[i] < 'A' || S[i] > 'Z') {
                console.log("No");
                return;
            }
        }
    }
    console.log("Yes");

}

console.log(funnyString('fUnNy'));