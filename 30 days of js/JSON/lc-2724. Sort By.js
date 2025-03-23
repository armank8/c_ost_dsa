// 2724. Sort By
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
let arr = [5, 4, 1, 2, 3],
fn = (x) => x;
console.log(sortBy(arr, fn));

/**Use .sort()
.sort() rearranges the elements in-place.
Apply the callback function (fn)
fn(a) and fn(b) extract sorting values.
Sort in ascending order
(fn(a) - fn(b)) ensures numerical sorting.
Return the sorted array.

.sort() in JavaScript is O(n log n) in the average case.
Applying the callback function takes O(1) for each comparison.
Overall complexity: O(n log n).
 */
