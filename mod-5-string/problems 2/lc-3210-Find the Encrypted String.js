// 3210. Find the Encrypted String
var getEncryptedString = function(s, k) {
    let result=[];
    let n = s.length;
    for(let i =0;i<s.length;i++){
        let c=(i+k)%n;
        result = result + s[c];
    }
    console.log(result);
    return result;
};
console.log(getEncryptedString("dart",3));
