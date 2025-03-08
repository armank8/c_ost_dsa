var merge = function(nums1, m, nums2, n) {
    console.log(nums1,nums2);
    let i=0;
    let j=0;
    let merged=[];

    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            merged.push(nums1[i]);
            i++;
        }else{
            merged.push(nums2[j]);
            j++;
        }
    }

    while(i<nums1.length){
        merged.push(nums1[i]);
        i++;
    }

    while(j<nums2.length){
        merged.push(nums2[j]);
        j++;
    }
    
    console.log(i,j);
    console.log(merged);
};

console.log(merge([1,2,3], 3, [2,5,6], 3));