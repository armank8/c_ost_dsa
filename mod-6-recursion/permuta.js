function printPerm(str,permutation) {
    // let permutation;
    if (str.length == 0) {
        console.log(permutation);
        return;
    }

    for (let i = 0; i < str.length; i++) {
       
        let currChar = str.charAt(i);
        console.log(currChar);
        let newStr = str.substring(0,i)+ str.substring(i+1);
        console.log(newStr);
        printPerm(newStr,permutation+currChar);
    }
}

console.log(printPerm('abc',""));