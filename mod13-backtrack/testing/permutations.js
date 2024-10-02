function main(nums) {
    console.log(nums);
    const result = [];
    const currentPermutation = [];
    const used = new Array(nums.length).fill(false);
    console.log(used);

    function backtrack() {
        if (currentPermutation.length === nums.length) {
            result.push([...currentPermutation]);
            return;
        }

        // loop through each number in the nums array
        for (let i = 0; i < nums.length; i++) {
            if(used[i]) continue;

            used[i] = true;
            currentPermutation.push(nums[i]);

            backtrack();
            currentPermutation.pop();
            used[i]=false;
        }
    }
    backtrack();
    return result;
}

let nums = [1, 2, 3];
console.log(main(nums));