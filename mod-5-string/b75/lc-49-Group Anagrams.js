var groupAnagrams = function (strs) {
  console.log(strs);
  let anagramMap = new Map();

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    console.log(sortedStr);

    if(!anagramMap.get(sortedStr)){
        anagramMap.set(sortedStr, []);
    }
    anagramMap.get(sortedStr).push(str);
  }

  console.log(anagramMap);
  return Array.from(anagramMap.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/**TimeComplexity :
 * Sorting each word- O(k log k), where k is the length of each word
 * Processing all words- O(n.k log k), where n is the number of words
 * Storing in a map- O(n.k)
 * Overall COmplexity- O(n.k log k)
 * 
 */

