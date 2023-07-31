let words = process.argv.slice(2);
let lcs = "";
for (
  let i = 0, start = 0, end = 0;
  i < words.length;
  start -= words[i++].includes(
    (lcs = words[0].substr(start, words[0].length + end))
  )
    ? 0
    : start > (i = 0)
    ? 1
    : --end
);
console.log(lcs);
