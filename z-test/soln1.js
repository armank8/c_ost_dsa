const MOD = 1e9 + 7;

function countUnlockingPermutations(complexity) {
  const n = complexity.length;
  const deps = Array(n)
    .fill(0)
    .map(() => new Set());

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (complexity[j] < complexity[i]) {
        deps[i].add(j);
      }
    }
  }

  const memo = new Map();

  function dp(mask) {
    if (mask === (1 << n) - 1) return 1;

    const key = mask.toString();
    if (memo.has(key)) return memo.get(key);

    let total = 0;

    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) !== 0) continue;

      let canUnlock = true;

      for (let d of deps[i]) {
        if ((mask & (1 << d)) === 0) {
          canUnlock = false;
          break;
        }
      }

      if (canUnlock) {
        total = (total + dp(mask | (1 << i))) % MOD;
      }
    }
    memo.set(key, total);
    return total;
  }
  return dp(1 << 0);
}

console.log(countUnlockingPermutations([0, 1, 2]));
