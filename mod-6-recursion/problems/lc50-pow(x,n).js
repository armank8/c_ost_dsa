// iterative - while loop
// var myPow = function(x, n) {
//     console.log(x,n);
//     if(n===0) return 1;
//     let res=1;
//     while(n>0){
//         res = res* x;
//         n--;
//     }
//     return res;
// };
// console.log(myPow(3,3));

// recursion
var myPow = function(x, n) {
    if(n<0) return 1.0 / myPow(x,-n);
    if(n===0) return 1;

    if(n%2 === 1){
        return x* myPow(x,n-1);
    }else{
        let y = myPow(x,n/2);
        return y*y
    }
};

console.log(myPow(2,8));