function multiply(a, b) {
    if (b == 0) {
        return 0;
    }  
    return a + multiply(a, b - 1);

}
// Time Complexity : O(b)
// Space Complexity : O(b)
console.log(multiply(4, 5));
console.log(multiply(3,3));
console.log(multiply(0,2));