// 219. Contains Duplicate II
var containsNearbyDuplicate = function(nums, k) {
    let map= new Map();

    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i]) && (i- map.get(nums[i]) <=k) ){
            return true;
        }

        map.set(nums[i],i);
    }

    console.log(map);
    console.log(map.get(2));
    return false;
};
console.log(containsNearbyDuplicate([1,2,3,1],3))
console.log(containsNearbyDuplicate([1,0,1,1],1))