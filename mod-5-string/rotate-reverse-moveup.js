function rotateString(input) {
    console.log(input);
    const S = input;
    const n = S.length;
    let  convertedS = S.split('');
    console.log(convertedS);
    let temp = convertedS[0];
    for (let i = 0; i < n - 1; i++) {
        convertedS[i] = convertedS[i + 1];
    }
    convertedS[n-1]=temp;
    convertedS=convertedS.join('');
    console.log(convertedS);

}

console.log(rotateString('sworn'));
console.log(rotateString('yhapp'));