function emptyArray(arr) {
  console.log(arr);
  const n= arr.length;

  const newA= new Array(n).map(()=>[]);

  const adjM = Array(n).fill().map(()=>Array(n).fill(0));

  console.log(newA);

  console.log(adjM)
}

let arr = [5, 9, 8, 4];
console.log(emptyArray(arr));
