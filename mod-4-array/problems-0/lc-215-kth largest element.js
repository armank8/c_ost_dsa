// 215. Kth Largest Element in an Array
// var findKthLargest = function(nums, k) {
//     nums.sort((a,b)=>b-a);

//     console.log(nums[k-1]);
//     return nums[k-1];
// };
// console.log(findKthLargest([3,2,1,5,6,4],2));
// TimeComplexity - sorting takes O(n log n), slow for large arrays


// Approach 2 : Min Heap(O (n log k) )- Efficient for Large n
// Using JS Priority Queue - Min Heap
var findKthLargest = function(nums, k) {
   let minHeap = [];

   for (let num of nums){
    minHeap.push(num);
    minHeap.sort((a,b) => a - b);

    if(minHeap.length>k){
        minHeap.shift();
    }
   }
   return minHeap[0];
};
console.log(findKthLargest([3,2,1,5,6,4],2));