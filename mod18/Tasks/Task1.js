function topKFrequent(nums, k) {
  let hash = {};
  for (let num of nums) {
    hash[num] = (hash[num] | 0) + 1;
  }
  console.log(hash);

  
  let store = Array(nums.length + 1)
    .fill(null)
    .map(() => []);
  console.log(store);


  for (let num in hash) {
    console.log(num);
    store[hash[num]].push(Number(num));
  }
  console.log(store);


  let result = [];
  for (let i = store.length - 1; i >= 0; i--) {
    console.log(i);
    if(store[i]){
        result.push(...store[i]);
    }
  }
  console.log(result);
  return result.slice(0,k);
}


let nums = [1, 1, 1, 2, 2, 3];
let k = 2;
console.log(topKFrequent(nums, k));
