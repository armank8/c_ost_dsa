var countBits = function(n) {
    let ans = new Array(n+1).fill(0);

    for(let i=0;i<=n;i++){
        let count = 0;num=i;
        while(num!==0){
            num &=(num-1);
            count++;
        }
        ans[i]=count;
    }
    return ans;
};
console.log(countBits(5));
// console.log(countBits(2));