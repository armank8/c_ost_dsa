function haystackNeedle(haystack, needle) {
    console.log(haystack, needle);
    const h = haystack.length;
    const n = needle.length;
    console.log(haystack[0],needle[0]);

    let count = 0;
    // console.log(count);
    for (let i = 0; i <= h - n; i++) {
        // count = 0;       
        for (let j = 0; j < n; j++) {
            if (haystack[i + j] === needle[j]) {
                count++;
                console.log(haystack[i + j], needle[j]);
                console.log(count);
            }

            if (count === n) {
                console.log(count, n);
                return 0;
            }
        }
        console.log(count);
        count = 0;
    }
    return -1;

}
// Time Complexity:  O(h*n)
// Space Complexity:  O(1)
console.log(haystackNeedle('sadbutsad', 'sad'));
console.log(haystackNeedle('codemama', 'ostad'));
console.log(haystackNeedle('hellobd', 'helo'));