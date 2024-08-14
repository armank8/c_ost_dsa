function main(a, b) {
    let lenA = a.length;
    let lenB = b.length;
    let lenC = 3;
    let result = "";
    let carry = 0;

    console.log(lenA, lenB);
    if (lenA < lenB) {
        a = a.padStart(lenB, 0);
        console.log(a);
    } else {
        b = b.padStart(lenA, 0);
        console.log(b);
    }

    for (let i = a.length - 1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry

        if(sum>=2){
            carry =1;
            result += (sum%2).toString();
        }else{
            carry=0;
            result+=sum.toString();
        }
    }

    if(carry===1){
        result+='1';
        result+='1';
    }

    console.log(result);
}


console.log(main("11", "1"));