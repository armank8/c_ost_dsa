var merge = function(intervals) {
    if (intervals.length === 0) return [];
    console.log(intervals);
    intervals.sort((a,b)=>a[0]-b[0]);

    console.log(intervals);
    
    let result=[intervals[0]];

   for(let i=1; i<intervals.length; i++){
    console.log(intervals[i]);

    let prev=result[result.length-1];
    let curr = intervals[i];
    console.log(prev,curr);

    if(curr[0] <= prev[1]){
        prev[1] = Math.max(prev[1],curr[1]);
    }else{
        result.push(curr);
    }
   }
   return result;
};
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));