let count = 0;
for (let i = 0; i < 10; i = i + 1) {
  for (let j = 1; j < 32; j = j * 2) {
    count++;
    console.log("hello world", count);
  }
}
