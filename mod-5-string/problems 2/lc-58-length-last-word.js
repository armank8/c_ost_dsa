var lengthOfLastWord = function(s) {
    let inputs = s.trim().split(" ");
    console.log(inputs);
    let last_word = inputs[inputs.length-1].length;
    return last_word; 
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));