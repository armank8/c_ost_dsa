function findKthCharacter(k) {
  function helper(ch, k) {
    if (k === 1) return ch;
    let mid = 1 << (Math.floor(Math.log2(k - 1)));
    let leftChar = helper(ch, k - mid);
    if ((k - 1) % 2 === 0) return leftChar;
    return String.fromCharCode((leftChar.charCodeAt(0) - 97 + 1) % 26 + 97);
  }
  return helper("a", k);
}

console.log(findKthCharacter(7));
