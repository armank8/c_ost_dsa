
function anagramCheck(str1, str2) {
    // console.log(str1, str2);
    // console.log(typeof(str1), typeof(str2));
    let hash = {};

    for (let letters of str1) {
        console.log(letters);
        hash[letters] = hash[letters] ? hash[letters] + 1 : 1
    }

    for (let letters of str2) {
        console.log(letters);
        hash[letters] = hash[letters] ? hash[letters] - 1 : 0
    }

    for(let i in hash){        
        if(hash[i] !==0){
            return false
        }
    }

    return true;

    console.log(hash);
}

console.log(anagramCheck('abcd', 'dbac'));



function main(input) {
    
    // console.log(input);
    const lines = input.split('\n');
    // console.log(lines);
    str1 = lines[0];
    str2 = lines[1];
    // console.log(str1, str2);
    // console.log(typeof (str1), typeof (str2));
    if (str1.length !== str2.length) {
        return "NO";
    }
    let hash = {};
    for (let letters of str1) {
        hash[letters] = (hash[letters] || 0) + 1;
    }

    for (let letters of str2) {
        if(!hash[letters]){
            return "NO"
        }
        hash[letters]--;
    }

    for (let i in hash) {
        if (hash[i] !== 0) {
            return 'NO';
        }
    }
    return "YES";
}

console.log(main('ab\nbc'))