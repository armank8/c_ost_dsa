/**problems of b-jet exam by remotepool.sagbrain
 * #1:
 * 1. Count the Number of Computer Unlocking Permutations
You are given an array `complexity` of length `n`. There are `n` locked computers in a room with labels from `0` to `n - 1`, each with its own unique password. The password of the computer `i` has a complexity `complexity[i]`. The password for the computer labeled `0` is already decrypted and serves as the root. All other computers must be unlocked using it or another previously unlocked computer, following these rules: - You can decrypt the password for computer `i` using the password for computer `j`, where `j < i` and `complexity[j] < complexity[i]`. - To decrypt the password for computer `i`, you must have already unlocked a computer `j` such that `j < i` and `complexity[j] < complexity[i]`. Find the number of **permutations** of `[0, 1, 2, ..., (n - 1)]` that represent a valid order in which the computers can be unlocked, starting from computer 0 as the only initially unlocked one. Since the answer may be large, return it **modulo 10^9 + 7**. **Note**: The password for the computer with label 0 is decrypted, and not the computer with the first position in the permutation.

#2:
2. Find the K-th Character in String Game I
Alice and Bob are playing a game. Initially, Alice has a string `word = "a"`. You are given a positive integer `k`. Now Bob will ask Alice to perform the following operation **forever**: - Generate a new string by **changing** each character in `word` to its next character in the English alphabet, and **append** it to the original `word`. For example: - "c" becomes "cd" - "zb" becomes "zbac" Return the value of the `k`-th character in `word`, after enough operations have been done for `word` to have at least `k` characters.

#3:
3. The Skyline Problem
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively. The geometric information of each building is given in the array buildings where buildings[i] = [left_i, right_i, height_i]: - left_i is the x coordinate of the left edge of the i-th building. - right_i is the x coordinate of the right edge of the i-th building. - height_i is the height of the i-th building. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0. The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form [[x1,y1],[x2,y2],...]. Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline's contour. Note: There must be no consecutive horizontal lines of equal height in the output skyline.



 * 
 */