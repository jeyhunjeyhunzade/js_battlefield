const words = process.argv.slice(2);
if (!words || words.length === 0) {
  return "";
}

const lcs = (w1, w2) => {
  const m = w1.length;
  const n = w2.length;
  const table = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  let maxLength = 0;
  let endingIndex = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (w1[i - 1] === w2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
        if (table[i][j] > maxLength) {
          maxLength = table[i][j];
          endingIndex = i;
        }
      }
    }
  }

  return w1.substring(endingIndex - maxLength, endingIndex);
};

let longestCommon = words[0];
for (let i = 1; i < words.length; i++) {
  longestCommon = lcs(longestCommon, words[i]);
}

console.log(longestCommon);
