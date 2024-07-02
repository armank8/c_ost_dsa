function sortingA(){
    let array = [[3, 'apple'], [1, 'banana'], [2, 'orange']];

    array.sort((a, b) => a[0] - b[0]);

    console.log(array);
}

console.log(sortingA());

