var reverse = function(x) {
    console.log(x);
    let INT_MAX = 2**31-1;
    let INT_MIN = -(2**31);
    console.log(INT_MAX," ", INT_MIN);

    let inputs=x.toString().split('').reverse().join('');
    let reversed = parseInt(inputs);
    console.log(reversed);

    if(x<0){
        reversed = -reversed;
    }

    if(reversed<INT_MIN || reversed > INT_MAX){
        return 0;
    }
    return reversed;
};
// console.log(reverse(123));
console.log(reverse(-124));
// console.log(reverse(120));