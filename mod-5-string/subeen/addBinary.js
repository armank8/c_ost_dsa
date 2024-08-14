function main(a, b) {
    let lenA = a.length;
    let lenB = b.length;
    let lenC = 3;

    console.log(lenA, lenB);
    if (lenA < lenB) {
        a = a.padStart(lenB,0);
        console.log(a);
    } else {
        b = b.padStart(lenA,0);
        console.log(b);
    }
}


console.log(main("11", "1"));