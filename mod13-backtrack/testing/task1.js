function permutation(str) {
    let result = [];

    function backtrack(currentStr, index) {
        if (index === currentStr.length) {
            result.push(currentStr);
            return;
        }

        for (let i = index; i < currentStr.length; i++) {
            currentStr = swap(currentStr, index, i);
            backtrack(currentStr, index + 1);

            currentStr = swap(currentStr, index, i);
        }
    }

    function swap(s, i, j) {
        const arr = s.split('');
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr.join('');
    }
    backtrack(str, 0);
    return result;
}

let str1 = 'abc';
// let str2 = 'xy';
console.log(permutation(str1));
// console.log(permutation(str2));