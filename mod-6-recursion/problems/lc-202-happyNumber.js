var isHappy = function(n) {
    console.log(n);
    let seen = new Set();

    while(n!==1){
        if(seen.has(n)) return false; // cycle detected
        seen.add(n);
        n = sumSquares(n);
    }

    return true;

    function sumSquares(num){
        let sum =0;
        while(num>0){
            let digit = num%10;
            console.log(num);
            sum= sum+ digit*digit;
            console.log(sum);
            num = Math.floor(num/10);
        }
        console.log(sum);
        return sum;
    }
    // sumSquares(n);
};
console.log(isHappy(123));
// console.log(isHappy(2));
// console.log(isHappy(19));