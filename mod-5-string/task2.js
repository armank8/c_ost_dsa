function haystackNeedle(haystack, needle) {
    console.log(haystack, needle);
    const h = haystack.length;
    const n = needle.length;
    console.log(haystack[0],needle[0]);

    let count = 0;
    // console.log(count);
    for (let i = 0; i <= h - n; i++) {
        count = 0;
        // console.log(count);
        for (j = 0; j < n; j++) {
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
        count = 0;
    }
    return -1;

}

console.log(haystackNeedle('sadbutsad', 'sad'));