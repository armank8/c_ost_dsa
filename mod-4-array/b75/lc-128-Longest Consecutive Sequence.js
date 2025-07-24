// lc - 128. Longest Consecutive Sequence
/*Given an unsorted array of integers nums,
return the length of the longest consecutive elements 
sequence. You must write an algorithm that runs in O(n) time.
 */

// var longestConsecutive = function(nums) {
//     if(nums.length ===0) return 0;

//     let numsSet = new Set(nums);
//     console.log(numsSet);
//     let longestStreak = 0;

//     for(let num of nums){
//         if(!numsSet.has(num-1)){
//             let currentNum = num;
//             currentStreak=1;

//             while(numsSet.has(currentNum+1)){
//                 currentNum +=1;
//                 currentStreak +=1;
//             }
//             longestStreak=Math.max(longestStreak,currentStreak);

//         }
//     }
//     return longestStreak;
// };
// console.log(longestConsecutive([100,4,200,1,3,2]));

// This code shows Time Limit Exceeded in leetcode - The
// current soln checks each number in the Set again
//  when expanding the sequence. For large input arrays
// this can become inefficient


// Optimized - avoids redundant checks

var longestConsecutive = function(nums) {
    if(nums.length === 0 ) return 0;

    let numsSet = new Set(nums);
    console.log(numsSet);
    let longestStreak = 0;
    

    for(let num of nums){
        console.log(num);
        if(!numsSet.has(num-1)){
            let nextNum=num+1;
            // console.log(nextNum);
            let count =1;

            while(numsSet.has(nextNum)){
                count++;
                numsSet.delete(nextNum);
                nextNum++;
            }
            longestStreak = Math.max(longestStreak,count);
        }
    }
        return longestStreak;
};
console.log(longestConsecutive([100,4,200,1,3,2,6,7]));
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));